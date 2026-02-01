const { chromium } = require('playwright');
const path = require('path');

(async () => {
  try {
    console.log('Installing Chromium...');
    await chromium.downloadBrowserIfNeeded();
    console.log('✓ Chromium installed');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
})();
