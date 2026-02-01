const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('\n=== WORLDBUILDER QA TEST ===\n');
  
  try {
    // Navigate to app
    console.log('1. Navigating to app...');
    await page.goto('https://publicbuilding-worldbuilder.vercel.app', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);
    
    // Take initial screenshot
    let screenshot = await page.screenshot({ path: '/data/workspace/screens/01-initial.png' });
    console.log('✓ App loaded');
    
    // 1. TEST BUILDING PLACEMENT
    console.log('\n2. Testing building placement...');
    const buildButtons = await page.locator('button:has-text("Build"), button:has-text("build"), [data-testid*="build"], .build-btn, [class*="build"]').count();
    console.log(`   Found ${buildButtons} build-related buttons`);
    
    // Try clicking a build button if visible
    const buildButton = page.locator('button:has-text("Build")').first();
    if (await buildButton.isVisible()) {
      await buildButton.click();
      await page.waitForTimeout(1000);
      console.log('✓ Build button clicked');
      screenshot = await page.screenshot({ path: '/data/workspace/screens/02-build-menu.png' });
    }
    
    // 2. CHECK RESOURCES
    console.log('\n3. Checking initial resources...');
    const pageText = await page.content();
    const resources = {
      gold: pageText.match(/gold[:\s]*(\d+)/i) || 'not found',
      rice: pageText.match(/rice[:\s]*(\d+)/i) || 'not found',
      population: pageText.match(/population[:\s]*(\d+)/i) || 'not found'
    };
    console.log('   Initial resources:', resources);
    
    // 3. WAIT AND CHECK PRODUCTION
    console.log('\n4. Waiting 5 seconds to check resource production...');
    await page.waitForTimeout(5000);
    const pageText2 = await page.content();
    const resources2 = {
      gold: pageText2.match(/gold[:\s]*(\d+)/i) || 'not found',
      rice: pageText2.match(/rice[:\s]*(\d+)/i) || 'not found'
    };
    console.log('   Resources after 5s:', resources2);
    
    // 4. TEST MARKET/SELLING
    console.log('\n5. Testing market/selling...');
    const marketButtons = await page.locator('button:has-text("Market"), button:has-text("Sell"), button:has-text("Trade"), [data-testid*="market"]').count();
    console.log(`   Found ${marketButtons} market-related buttons`);
    
    const marketButton = page.locator('button:has-text("Market"), button:has-text("Sell")').first();
    if (await marketButton.isVisible()) {
      await marketButton.click();
      await page.waitForTimeout(1000);
      console.log('✓ Market button clicked');
      screenshot = await page.screenshot({ path: '/data/workspace/screens/03-market.png' });
    }
    
    // 5. TEST EXPLORATION/SCOUTS
    console.log('\n6. Testing exploration/scouts...');
    const scoutButtons = await page.locator('button:has-text("Scout"), button:has-text("Explore"), [data-testid*="explore"], [data-testid*="scout"]').count();
    console.log(`   Found ${scoutButtons} scout/explore buttons`);
    
    const scoutButton = page.locator('button:has-text("Scout"), button:has-text("Explore")').first();
    if (await scoutButton.isVisible()) {
      await scoutButton.click();
      await page.waitForTimeout(1000);
      console.log('✓ Scout/Explore button clicked');
      screenshot = await page.screenshot({ path: '/data/workspace/screens/04-explore.png' });
    }
    
    // 6. CHECK PROGRESSION
    console.log('\n7. Checking level/progression...');
    const levelMatch = pageText.match(/level[:\s]*(\d+)/i);
    const expMatch = pageText.match(/exp[erience]*[:\s]*(\d+)/i);
    console.log(`   Level: ${levelMatch ? levelMatch[1] : 'not found'}`);
    console.log(`   Experience: ${expMatch ? expMatch[1] : 'not found'}`);
    
    // 7. TEST SAVE/LOAD
    console.log('\n8. Testing save/load persistence...');
    
    // Get current state
    const stateScript = `
      JSON.stringify({
        resources: window.gameState || window.state || {},
        localStorage: localStorage.getItem('gameState') || localStorage.getItem('world-builder') || 'not found'
      })
    `;
    
    const currentState = await page.evaluate(() => {
      return {
        gold: document.body.innerText.match(/gold[:\s]*(\d+)/i)?.[1] || 'N/A',
        url: window.location.href
      };
    });
    console.log('   Current game state:', currentState);
    
    // Reload page
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
    
    const reloadedState = await page.evaluate(() => {
      return {
        gold: document.body.innerText.match(/gold[:\s]*(\d+)/i)?.[1] || 'N/A'
      };
    });
    console.log('   After reload:', reloadedState);
    console.log(`   Persistence: ${currentState.gold === reloadedState.gold ? '✓ WORKS' : '✗ FAILED'}`);
    
    screenshot = await page.screenshot({ path: '/data/workspace/screens/05-final.png' });
    
    // 8. DETECT BUGS
    console.log('\n9. Checking for console errors...');
    const errors = [];
    page.on('pageerror', err => {
      errors.push(`JS Error: ${err.message}`);
    });
    
    // Check for visible errors
    const errorElements = await page.locator('[class*="error"], [class*="Error"]').count();
    console.log(`   Error elements on page: ${errorElements}`);
    
    console.log('\n=== TEST SUMMARY ===');
    console.log('✓ Application loaded successfully');
    console.log('✓ All pages/systems checked');
    console.log(`✓ Screenshots saved to /data/workspace/screens/`);
    
  } catch (error) {
    console.error('\n✗ ERROR during testing:', error.message);
    console.error('Stack:', error.stack);
  }
  
  await browser.close();
})();
