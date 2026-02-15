import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';

const PORT = 3457;

async function generateCardPDF() {
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

    const page = await browser.newPage();

    await page.setViewport({
      width: 400,
      height: 600,
      deviceScaleFactor: 3, // 高清
    });

    console.log(`Navigating to http://localhost:${PORT}/card...`);

    await page.goto(`http://localhost:${PORT}/card`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    await setTimeout(2000);

    console.log('Generating PDF...');

    // 生成名片 PDF (两张名片一页)
    await page.pdf({
      path: 'ENDOTEC-Business-Card.pdf',
      width: '100mm',
      height: '160mm',
      printBackground: true,
      margin: { top: '5mm', right: '5mm', bottom: '5mm', left: '5mm' },
    });

    console.log('\n✅ Business card PDF generated!');
    console.log('📄 File: ENDOTEC-Business-Card.pdf');

    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error.message);
  } finally {
    server.kill();
    process.exit(0);
  }
}

generateCardPDF();
