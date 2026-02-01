const { chromium } = require('playwright');
const fs = require('fs');

async function runDetailedQA() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1200, height: 800 });
  
  console.log('Starting detailed gameplay analysis...\n');
  
  // Load the game
  await page.goto('https://publicbuilding-worldbuilder.vercel.app', { 
    waitUntil: 'domcontentloaded',
    timeout: 30000 
  });
  
  // Get detailed game state
  const gameState = await page.evaluate(() => {
    const result = {
      pageTitle: document.title,
      buttons: [],
      textContent: document.body.innerText.substring(0, 5000),
      localStorageKeys: Object.keys(localStorage),
      resourceElements: [],
      buildingElements: [],
      marketItems: [],
      explorationOptions: [],
      uiElements: []
    };
    
    // Get all buttons
    document.querySelectorAll('button').forEach(btn => {
      result.buttons.push({
        text: btn.textContent.trim(),
        className: btn.className,
        id: btn.id
      });
    });
    
    // Get text that looks like resources
    const textContent = document.body.innerText;
    const resourceMatch = textContent.match(/(?:Rice|Tea|Silk|Jade|Gold|Wood|Stone|Population|Food|Happiness)/g);
    if (resourceMatch) {
      result.resourceElements = [...new Set(resourceMatch)];
    }
    
    // Get shop/market items
    const marketText = textContent.match(/Market Exchange[\s\S]*?(?=\n\n|$)/);
    if (marketText) {
      result.marketItems = marketText[0].split('\n').filter(l => l.trim());
    }
    
    // Get exploration options
    const explorationText = textContent.match(/Exploration[\s\S]*?(?=\n\n|$)/);
    if (explorationText) {
      result.explorationOptions = explorationText[0].split('\n').filter(l => l.trim());
    }
    
    return result;
  });
  
  console.log('=== DETAILED GAME ANALYSIS ===\n');
  console.log(`Page Title: ${gameState.pageTitle}`);
  console.log(`Total Buttons: ${gameState.buttons.length}`);
  console.log(`Resource Types Found: ${gameState.resourceElements.join(', ') || 'None detected'}\n`);
  
  console.log('UI Elements:');
  gameState.buttons.forEach((btn, i) => {
    if (btn.text) console.log(`  ${i + 1}. ${btn.text}`);
  });
  
  console.log('\nMarket Exchange Items:');
  gameState.marketItems.forEach(item => {
    if (item.trim()) console.log(`  • ${item}`);
  });
  
  console.log('\nExploration Options:');
  gameState.explorationOptions.forEach(opt => {
    if (opt.trim() && !opt.includes('Exploration')) console.log(`  • ${opt}`);
  });
  
  console.log('\nGame Content Preview:');
  console.log(gameState.textContent.substring(0, 1000));
  
  console.log('\n--- INTERACTIVE TESTING ---');
  
  // Test saving functionality
  console.log('Testing save functionality...');
  const savedData = await page.evaluate(() => {
    return localStorage.getItem('gameState') || 'No save detected';
  });
  console.log(`Save data exists: ${savedData !== 'No save detected' ? 'YES' : 'NO'}`);
  
  // Test interactivity - click a build button if available
  const buildButtons = await page.locator('button:has-text("Build"), button:has-text("build")').all();
  console.log(`Build buttons found: ${buildButtons.length}`);
  
  // Click a "Sell" button to test interaction
  const sellButtons = await page.locator('button:has-text("Sell")').all();
  if (sellButtons.length > 0) {
    console.log(`Attempting interaction with Sell button...`);
    try {
      await sellButtons[0].click({ timeout: 3000 });
      await page.waitForTimeout(500);
      console.log(`✓ Button click successful`);
    } catch (e) {
      console.log(`✗ Button interaction failed: ${e.message}`);
    }
  }
  
  // Test Scout buttons
  const scoutButtons = await page.locator('button:has-text("Scout")').all();
  console.log(`Scout buttons found: ${scoutButtons.length}`);
  
  // Check for dynamic content changes
  const beforeContent = await page.locator('body').innerText();
  if (scoutButtons.length > 0) {
    try {
      await scoutButtons[0].click({ timeout: 3000 });
      await page.waitForTimeout(300);
      const afterContent = await page.locator('body').innerText();
      const contentChanged = beforeContent !== afterContent;
      console.log(`Content change on scout: ${contentChanged ? 'YES ✓' : 'NO'}`);
    } catch (e) {
      console.log(`Scout button test failed`);
    }
  }
  
  // Take final screenshot showing game state
  await page.screenshot({ path: '/data/workspace/qa-detailed-screenshot.png' });
  
  // Get performance metrics
  const perfMetrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    return {
      domContentLoaded: nav?.domContentLoadedEventEnd - nav?.domContentLoadedEventStart,
      loadComplete: nav?.loadEventEnd - nav?.loadEventStart,
      paintEntries: performance.getEntriesByType('paint').length
    };
  });
  
  console.log('\nPerformance Metrics:');
  console.log(`  DOM Content Loaded: ${perfMetrics.domContentLoaded}ms`);
  console.log(`  Paint entries: ${perfMetrics.paintEntries}`);
  
  await browser.close();
  
  console.log('\n=== DETAILED ANALYSIS COMPLETE ===');
}

runDetailedQA().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
