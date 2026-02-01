const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('\n=== DEBUG RENDERER TEST ===\n');

  // Capture console logs
  const logs = [];
  page.on('console', msg => {
    const text = msg.text();
    console.log(`[${msg.type().toUpperCase()}]`, text);
    logs.push({type: msg.type(), text});
  });

  page.on('pageerror', err => {
    console.error('[PAGE ERROR]', err);
    logs.push({type: 'error', text: err.message});
  });

  try {
    // Navigate to local game
    console.log('Loading game from dev server...');
    const gameUrl = 'http://localhost:5173';
    console.log('URL:', gameUrl);
    
    await page.goto(gameUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    console.log('✓ Game loaded');
    
    // Wait for rendering to happen
    await page.waitForTimeout(3000);
    
    // Take screenshot
    await page.screenshot({ path: '/data/workspace/debug-screenshot.png' });
    console.log('✓ Screenshot saved to debug-screenshot.png');
    
    // Evaluate rendering state
    const state = await page.evaluate(() => {
      return {
        canvasWidth: document.getElementById('game-canvas')?.width,
        canvasHeight: document.getElementById('game-canvas')?.height,
        hasGameState: typeof window.gameState !== 'undefined',
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      };
    });
    
    console.log('\nRendering state:', state);
    console.log('\n=== DEBUG COMPLETE ===\n');
    
    // Save logs
    fs.writeFileSync('/data/workspace/debug-logs.json', JSON.stringify(logs, null, 2));
    console.log('Logs saved to debug-logs.json');
    
  } catch (error) {
    console.error('Error:', error);
  }
  
  await browser.close();
})();
