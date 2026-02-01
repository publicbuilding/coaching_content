const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('\n=== WORLDBUILDER COMPREHENSIVE QA TEST ===\n');
  
  const bugs = [];
  let score = 5; // Start at perfect
  
  try {
    // Navigate to app
    console.log('📱 Loading application...');
    await page.goto('https://publicbuilding-worldbuilder.vercel.app', { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForTimeout(3000);
    
    // Get initial state
    const initialState = await page.evaluate(() => {
      const canvas = document.getElementById('game-canvas');
      return {
        hasCanvas: !!canvas,
        canvasWidth: canvas?.width,
        canvasHeight: canvas?.height,
        pageTitle: document.title,
        windowReady: !!window.game || !!window.gameState
      };
    });
    
    console.log('✓ App loaded');
    console.log(`  - Canvas: ${initialState.hasCanvas} (${initialState.canvasWidth}x${initialState.canvasHeight})`);
    console.log(`  - Title: ${initialState.pageTitle}`);
    
    // Screenshot before interaction
    await page.screenshot({ path: '/data/workspace/screens/10-before-interactions.png' });
    
    // ========== TEST 1: BUILDING PLACEMENT ==========
    console.log('\n🏗️  TEST 1: Building Placement');
    
    try {
      // Try to click on the canvas to place a building
      const canvas = await page.locator('#game-canvas');
      
      // Click somewhere on the canvas (middle area)
      await canvas.click({ position: { x: 640, y: 400 } });
      await page.waitForTimeout(500);
      
      // Try right-click for building menu
      await canvas.click({ button: 'right', position: { x: 640, y: 400 } });
      await page.waitForTimeout(500);
      
      console.log('  ✓ Canvas clickable');
      
      // Check if any UI appeared
      const buildMenu = await page.locator('[id*="build"], [class*="build"], [aria-label*="build"]').count();
      if (buildMenu > 0) {
        console.log(`  ✓ Build menu found (${buildMenu} elements)`);
      } else {
        console.log('  ⚠ No build menu visible after click');
        bugs.push('BUG #1: Building placement UI not visible after canvas click');
        score -= 0.5;
      }
    } catch (e) {
      console.log(`  ✗ Canvas interaction failed: ${e.message}`);
      bugs.push(`BUG #2: Canvas click error - ${e.message}`);
      score -= 1;
    }
    
    // ========== TEST 2: RESOURCE PRODUCTION ==========
    console.log('\n💰 TEST 2: Resource Production');
    
    const getRiceAmount = async () => {
      const text = await page.textContent('body');
      const match = text?.match(/Rice[:\s]+(\d+)/i);
      return match ? parseInt(match[1]) : 0;
    };
    
    const rice1 = await getRiceAmount();
    console.log(`  - Rice before wait: ${rice1}`);
    
    await page.waitForTimeout(6000); // Wait 6 seconds
    
    const rice2 = await getRiceAmount();
    console.log(`  - Rice after 6 seconds: ${rice2}`);
    
    if (rice2 > rice1) {
      console.log(`  ✓ Resource production working (+${rice2 - rice1} rice)`);
    } else {
      console.log(`  ⚠ Resources not increasing (${rice1} → ${rice2})`);
      bugs.push('BUG #3: Resources not producing (no increase in rice after 6 seconds)');
      score -= 1.5;
    }
    
    // ========== TEST 3: POPULATION GROWTH ==========
    console.log('\n👥 TEST 3: Population Growth');
    
    const text = await page.textContent('body');
    const popMatch = text?.match(/population[:\s]*(\d+)/i);
    const peopleMatch = text?.match(/people[:\s]*(\d+)/i);
    const villagers = text?.match(/villagers[:\s]*(\d+)/i);
    
    if (popMatch || peopleMatch || villagers) {
      console.log(`  ✓ Population/people indicator found`);
    } else {
      console.log(`  ⚠ No population/people indicator visible`);
      bugs.push('BUG #4: Population growth mechanic not visible or not implemented');
      score -= 0.5;
    }
    
    // ========== TEST 4: MARKET/SELLING ==========
    console.log('\n🏪 TEST 4: Market - Selling Resources');
    
    const sellButtons = await page.locator('[id*="sell"], button:has-text("Sell")').count();
    console.log(`  - Sell buttons found: ${sellButtons}`);
    
    if (sellButtons > 0) {
      // Try clicking a sell button
      const firstSellBtn = await page.locator('[id*="sell"], button:has-text("Sell")').first();
      const initialRice = await getRiceAmount();
      
      if (await firstSellBtn.isVisible()) {
        await firstSellBtn.click();
        await page.waitForTimeout(1000);
        const afterSellRice = await getRiceAmount();
        
        if (afterSellRice < initialRice) {
          console.log(`  ✓ Market sell working (rice: ${initialRice} → ${afterSellRice})`);
        } else {
          console.log(`  ⚠ Sell button clicked but rice unchanged`);
          bugs.push('BUG #5: Market selling not working - resources not deducted');
          score -= 0.75;
        }
      }
    } else {
      console.log(`  ✗ No market buttons found`);
      bugs.push('BUG #6: Market system not accessible');
      score -= 1;
    }
    
    // ========== TEST 5: EXPLORATION/SCOUTS ==========
    console.log('\n🗺️  TEST 5: Exploration - Scout Buttons');
    
    const scoutButtons = await page.locator('[id*="scout"], button:has-text("Scout")').count();
    console.log(`  - Scout buttons: ${scoutButtons}`);
    
    if (scoutButtons > 0) {
      const scoutBtn = await page.locator('[id*="scout"], button:has-text("Scout")').first();
      if (await scoutBtn.isVisible()) {
        await scoutBtn.click();
        await page.waitForTimeout(1000);
        console.log('  ✓ Scout button clickable');
        
        // Check for scout result/message
        const content = await page.textContent('body');
        if (content?.includes('scout') || content?.includes('discovered') || content?.includes('exploration')) {
          console.log('  ✓ Scout action appears to have feedback');
        }
      }
    } else {
      console.log(`  ✗ No scout buttons found`);
      bugs.push('BUG #7: Exploration/Scout system not found');
      score -= 0.75;
    }
    
    // ========== TEST 6: PROGRESSION/LEVELING ==========
    console.log('\n📈 TEST 6: Progression - Leveling System');
    
    const levelMatch = text?.match(/level[:\s]*(\d+)/i);
    const expMatch = text?.match(/exp[erience]*[:\s]*(\d+)/i);
    
    if (levelMatch || expMatch) {
      console.log(`  ✓ Level/Experience system visible`);
      if (levelMatch) console.log(`    - Level: ${levelMatch[1]}`);
      if (expMatch) console.log(`    - Experience: ${expMatch[1]}`);
    } else {
      console.log(`  ⚠ No level/experience indicators found`);
      bugs.push('BUG #8: Progression/leveling system not visible');
      score -= 1;
    }
    
    // ========== TEST 7: SAVE/LOAD PERSISTENCE ==========
    console.log('\n💾 TEST 7: Save/Load Persistence');
    
    // Get current state before save
    const beforeSave = await page.evaluate(() => ({
      url: window.location.href,
      bodyText: document.body.innerText.substring(0, 100)
    }));
    
    // Find and click save button
    const saveBtn = await page.locator('[id*="save"], button:has-text("Save")').first();
    if (await saveBtn?.isVisible()) {
      await saveBtn.click();
      await page.waitForTimeout(1000);
      console.log('  ✓ Save button clicked');
    }
    
    // Check localStorage for saved data
    const savedData = await page.evaluate(() => {
      return {
        gameState: localStorage.getItem('gameState'),
        worldBuilder: localStorage.getItem('world-builder'),
        allKeys: Object.keys(localStorage)
      };
    });
    
    if (savedData.gameState || savedData.worldBuilder || savedData.allKeys.length > 0) {
      console.log(`  ✓ Save data in localStorage (${savedData.allKeys.length} keys)`);
      
      // Test reload
      await page.reload({ waitUntil: 'networkidle' });
      await page.waitForTimeout(2000);
      
      const afterReload = await page.evaluate(() => ({
        bodyText: document.body.innerText.substring(0, 100)
      }));
      
      if (afterReload.bodyText === beforeSave.bodyText) {
        console.log('  ✓ Data persists after reload');
      } else {
        console.log('  ⚠ Data may not be persisting correctly');
        bugs.push('BUG #9: Game state not persisting correctly after reload');
        score -= 0.5;
      }
    } else {
      console.log(`  ⚠ No save data found in localStorage`);
      bugs.push('BUG #10: Save system not using localStorage');
      score -= 0.75;
    }
    
    // ========== TEST 8: SOUND/UI CONTROLS ==========
    console.log('\n🔊 TEST 8: UI Controls - Sound/Settings');
    
    const muteBtn = await page.locator('[id*="mute"], button:has-text("Mute")').count();
    const soundBtn = await page.locator('[id*="sound"], [class*="sound"]').count();
    const resetBtn = await page.locator('[id*="reset"], button:has-text("Reset")').count();
    
    console.log(`  - Mute buttons: ${muteBtn}`);
    console.log(`  - Sound controls: ${soundBtn}`);
    console.log(`  - Reset button: ${resetBtn}`);
    
    if (muteBtn > 0 && soundBtn > 0) {
      console.log('  ✓ Sound controls present');
    } else {
      console.log('  ⚠ Limited audio controls');
    }
    
    if (resetBtn > 0) {
      console.log('  ✓ Reset button available');
    }
    
    // ========== FINAL SCREENSHOTS ==========
    await page.screenshot({ path: '/data/workspace/screens/11-after-interactions.png' });
    
    // Final summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 QA TEST RESULTS SUMMARY');
    console.log('='.repeat(50));
    
    console.log(`\n🎯 Functionality Score: ${Math.max(1, score).toFixed(1)}/5`);
    
    if (bugs.length === 0) {
      console.log('\n✓ NO BUGS FOUND\n');
    } else {
      console.log(`\n❌ BUGS FOUND (${bugs.length}):\n`);
      bugs.forEach((bug, i) => {
        console.log(`${i+1}. ${bug}`);
      });
    }
    
    // System assessment
    console.log('\n📋 SYSTEM ASSESSMENT:\n');
    console.log('1. Building Placement: ' + (bugs.some(b => b.includes('Building')) ? '❌ BROKEN' : '✓ WORKING'));
    console.log('2. Resource Production: ' + (bugs.some(b => b.includes('Resources not producing')) ? '❌ BROKEN' : '✓ WORKING'));
    console.log('3. Population Growth: ' + (bugs.some(b => b.includes('Population')) ? '⚠️  LIMITED' : '✓ WORKING'));
    console.log('4. Market System: ' + (bugs.some(b => b.includes('Market')) ? '❌ BROKEN' : '✓ WORKING'));
    console.log('5. Exploration: ' + (bugs.some(b => b.includes('Exploration')) ? '❌ BROKEN' : '✓ WORKING'));
    console.log('6. Progression: ' + (bugs.some(b => b.includes('Progression')) ? '⚠️  LIMITED' : '✓ WORKING'));
    console.log('7. Save/Load: ' + (bugs.some(b => b.includes('persisting')) ? '⚠️  PARTIAL' : '✓ WORKING'));
    
  } catch (error) {
    console.error('\n🚨 CRITICAL ERROR:', error.message);
    score = 1;
  }
  
  await browser.close();
  process.exit(score < 2.5 ? 1 : 0);
})();
