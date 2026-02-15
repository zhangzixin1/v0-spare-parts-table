import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';

const PORT = 3458;

async function generateStationeryPDF() {
  console.log('Starting Next.js server...');

  const server = spawn('npx', ['next', 'dev', '-p', PORT.toString()], {
    cwd: process.cwd(),
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  let serverReady = false;

  server.stdout.on('data', (data) => {
    const output = data.toString();
    console.log('[server]', output.trim());
    if (output.includes('Ready') || output.includes('localhost') || output.includes(PORT.toString())) {
      serverReady = true;
    }
  });

  server.stderr.on('data', (data) => {
    const output = data.toString();
    if (output.includes('Ready') || output.includes('localhost') || output.includes(PORT.toString())) {
      serverReady = true;
    }
  });

  console.log('Waiting for server to start...');
  for (let i = 0; i < 60; i++) {
    if (serverReady) break;
    await setTimeout(1000);
  }

  await setTimeout(3000);
  console.log('Server ready, launching browser...');

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    // Generate Letterhead PDF
    console.log('\n📝 Generating Letterhead PDF...');
    const letterheadPage = await browser.newPage();
    await letterheadPage.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
    await letterheadPage.goto(`http://localhost:${PORT}/letterhead`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });
    await setTimeout(3000);
    await letterheadPage.pdf({
      path: 'ENDOTEC-Letterhead.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log('✅ Letterhead: ENDOTEC-Letterhead.pdf');

    // Generate Envelope PDF
    console.log('\n✉️  Generating Envelope PDF...');
    const envelopePage = await browser.newPage();
    await envelopePage.setViewport({ width: 900, height: 700, deviceScaleFactor: 2 });
    await envelopePage.goto(`http://localhost:${PORT}/envelope`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });
    await setTimeout(3000);
    await envelopePage.pdf({
      path: 'ENDOTEC-Envelope.pdf',
      width: '250mm',
      height: '400mm',
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
    });
    console.log('✅ Envelope: ENDOTEC-Envelope.pdf');

    console.log('\n🎉 All stationery PDFs generated successfully!');

    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error.message);
  } finally {
    server.kill();
    process.exit(0);
  }
}

generateStationeryPDF();
