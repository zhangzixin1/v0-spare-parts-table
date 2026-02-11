import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';

const PORT = 3456;

async function generatePDF() {
  console.log('Starting Next.js server...');

  const server = spawn('npx', ['next', 'dev', '-p', PORT.toString()], {
    cwd: process.cwd(),
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  let serverReady = false;

  server.stdout.on('data', (data) => {
    const output = data.toString();
    console.log('[server]', output.trim());
    if (output.includes('Ready') || output.includes('localhost') || output.includes('3456')) {
      serverReady = true;
    }
  });

  server.stderr.on('data', (data) => {
    const output = data.toString();
    if (output.includes('Ready') || output.includes('localhost') || output.includes('3456')) {
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

    // Set a tall viewport to see more content
    await page.setViewport({
      width: 794,
      height: 11230, // 10 pages height to load all images at once
      deviceScaleFactor: 2,
    });

    console.log(`Navigating to http://localhost:${PORT}/print...`);

    await page.goto(`http://localhost:${PORT}/print`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    // Scroll through entire page to trigger lazy loading
    console.log('Scrolling to load all images...');
    await page.evaluate(async () => {
      const totalHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      let scrollPosition = 0;

      while (scrollPosition < totalHeight) {
        window.scrollTo(0, scrollPosition);
        scrollPosition += viewportHeight;
        await new Promise(r => setTimeout(r, 300));
      }

      // Scroll back to top
      window.scrollTo(0, 0);
    });

    // Wait for all images to fully load
    console.log('Waiting for images to load...');
    await setTimeout(5000);

    // Reset viewport to A4 for PDF
    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 2,
    });

    await setTimeout(2000);

    console.log('Generating PDF...');

    await page.pdf({
      path: 'ENDOTEC-Components-Catalog.pdf',
      width: '794px',
      height: '1123px',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log('\n✅ PDF generated successfully!');
    console.log('📄 File: ENDOTEC-Components-Catalog.pdf');

    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error.message);
  } finally {
    server.kill();
    process.exit(0);
  }
}

generatePDF();
