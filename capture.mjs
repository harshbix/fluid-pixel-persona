import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });

        console.log('Navigating to https://henrypeter.vercel.app/ ...');
        await page.goto('https://henrypeter.vercel.app/', { waitUntil: 'domcontentloaded', timeout: 60000 });

        // Wait for the loader to finish and hero to animate in
        console.log('Waiting for 10 seconds to allow the percentage loader to complete and hero to open...');
        await new Promise(r => setTimeout(r, 10000));

        console.log('Taking screenshot...');
        await page.screenshot({ path: './public/assets/projects/henrypeter.webp', type: 'webp', quality: 90 });

        await browser.close();
        console.log('Screenshot saved to public/assets/projects/henrypeter.webp');
    } catch (error) {
        console.error('Failed to capture screenshot:', error);
        process.exit(1);
    }
})();
