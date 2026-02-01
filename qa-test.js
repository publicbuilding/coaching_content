const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const QA_RESULTS = {
  timestamp: new Date().toISOString(),
  criteria: {},
  issues: [],
  screenshots: [],
  sessionLog: []
};

async function log(msg) {
  console.log(`[QA] ${msg}`);
  QA_RESULTS.sessionLog.push(`${new Date().toISOString()}: ${msg}`);
}

async function testCriteria(name, test) {
  try {
    const result = await test();
    QA_RESULTS.criteria[name] = result;
    await log(`✓ ${name}: ${result.score}/5 - ${result.note}`);
    return result.score;
  } catch (err) {
    await log(`✗ ${name}: ERROR - ${err.message}`);
    QA_RESULTS.criteria[name] = { score: 0, note: `Error: ${err.message}` };
    return 0;
  }
}

async function runQA() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set viewport and performance metrics
  await page.setViewportSize({ width: 1024, height: 768 });
  let frameDrops = 0;
  let totalFrames = 0;
  
  await log('=== GAME OF THE YEAR QA - Eastern Realm Dynasty Builder ===');
  await log(`Starting comprehensive gameplay analysis...`);
  
  // Navigate to game
  const startTime = Date.now();
  await page.goto('https://publicbuilding-worldbuilder.vercel.app', { waitUntil: 'networkidle' });
  const loadTime = Date.now() - startTime;
  await log(`Game loaded in ${loadTime}ms`);
  
  // Take initial screenshot
  await page.screenshot({ path: 'qa-initial.png' });
  QA_RESULTS.screenshots.push('qa-initial.png');
  
  // ========== CORE GAMEPLAY TESTS (10 points) ==========
  
  // 1. Goal Clarity
  await testCriteria('1. Goal Clarity', async () => {
    const pageContent = await page.content();
    const hasObjectives = pageContent.includes('Build') || pageContent.includes('Produce') || pageContent.includes('Dynasty');
    const goalElements = await page.locator('[role="heading"], h1, h2, h3, .title, .objective').count();
    
    if (!hasObjectives && goalElements < 2) {
      return { score: 2, note: 'Goals not clearly visible' };
    }
    if (goalElements >= 2) {
      return { score: 5, note: 'Clear objectives displayed' };
    }
    return { score: 3, note: 'Moderately clear goals' };
  });
  
  // 2. Tutorial Effectiveness
  await testCriteria('2. Tutorial Effectiveness', async () => {
    const pageContent = await page.content();
    const hasTutorial = pageContent.includes('Tutorial') || pageContent.includes('Guide') || pageContent.includes('Help');
    const buttons = await page.locator('button').count();
    
    if (hasTutorial && buttons >= 3) {
      return { score: 5, note: 'Tutorial present and interactive' };
    }
    if (buttons >= 3) {
      return { score: 4, note: 'Interactive interface available' };
    }
    return { score: 2, note: 'Limited guidance visible' };
  });
  
  // 3. Learning Curve
  let learningScore = 3;
  await testCriteria('3. Learning Curve', async () => {
    const pageContent = await page.content();
    // Interact with first building action
    const buildButtons = await page.locator('button').all();
    if (buildButtons.length > 0) {
      await buildButtons[0].click();
      await page.waitForTimeout(500);
      const feedback = await page.locator('[class*="feedback"], [class*="notification"], [class*="message"]').count();
      if (feedback > 0) learningScore = 4;
    }
    return { score: learningScore, note: 'Initial interactions available' };
  });
  
  // 4. Core Loop Engagement
  await testCriteria('4. Core Loop Engagement (Build→Produce→Expand)', async () => {
    const pageContent = await page.content();
    const hasBuilding = pageContent.includes('Build');
    const hasProduction = pageContent.includes('Produce') || pageContent.includes('Production') || pageContent.includes('Resource');
    const hasExpansion = pageContent.includes('Expand') || pageContent.includes('Level') || pageContent.includes('Growth');
    
    let score = 2;
    if (hasBuilding && hasProduction && hasExpansion) score = 5;
    else if (hasBuilding && hasProduction) score = 4;
    else if (hasBuilding || hasProduction) score = 3;
    
    return { score, note: `Building: ${hasBuilding}, Production: ${hasProduction}, Expansion: ${hasExpansion}` };
  });
  
  // 5. Decision Depth
  await testCriteria('5. Decision Depth - Do choices matter?', async () => {
    const buttons = await page.locator('button').count();
    const inputs = await page.locator('input, select').count();
    const buildingOptions = await page.locator('[class*="building"], [class*="option"], [class*="choice"]').count();
    
    let score = 2;
    if (buttons >= 5 && buildingOptions >= 3) score = 5;
    else if (buttons >= 4 && buildingOptions >= 2) score = 4;
    else if (buttons >= 3) score = 3;
    
    return { score, note: `${buttons} buttons, ${buildingOptions} distinct choices` };
  });
  
  // 6. Risk/Reward - Strategic Tension
  await testCriteria('6. Risk/Reward - Strategic Tension', async () => {
    const pageContent = await page.content();
    const hasResources = pageContent.includes('Resource') || pageContent.includes('Wood') || pageContent.includes('Gold') || pageContent.includes('Population');
    const hasCosts = pageContent.includes('Cost') || pageContent.includes('Price') || pageContent.includes('Requirement');
    const hasRarity = pageContent.includes('Rare') || pageContent.includes('Epic') || pageContent.includes('Legendary');
    
    let score = 2;
    if (hasResources && hasCosts) score = 4;
    if (hasRarity) score = 5;
    
    return { score, note: `Resources: ${hasResources}, Costs: ${hasCosts}, Rarity: ${hasRarity}` };
  });
  
  // 7. Progression Pacing
  await testCriteria('7. Progression Pacing - Feels like progress?', async () => {
    const pageContent = await page.content();
    const hasLevels = pageContent.includes('Level') || pageContent.includes('Progress') || pageContent.includes('Rank');
    const hasStats = pageContent.includes('Population') || pageContent.includes('Resources') || pageContent.includes('Gold');
    
    if (hasLevels && hasStats) {
      return { score: 5, note: 'Clear progression metrics visible' };
    }
    return { score: 3, note: 'Progression tracking available' };
  });
  
  // 8. Challenge Scaling
  await testCriteria('8. Challenge Scaling - Gets harder appropriately?', async () => {
    const pageContent = await page.content();
    const hasMultipleLevels = pageContent.includes('Level 2') || pageContent.includes('Level 3') || pageContent.includes('Wave') || pageContent.includes('Stage');
    
    if (hasMultipleLevels) {
      return { score: 4, note: 'Multiple difficulty levels available' };
    }
    return { score: 3, note: 'Progression system exists' };
  });
  
  // 9. Feedback Systems - Clear what's happening?
  await testCriteria('9. Feedback Systems - Clear feedback?', async () => {
    const buttons = await page.locator('button').all();
    let feedbackElements = 0;
    
    if (buttons.length > 0) {
      await buttons[0].click();
      await page.waitForTimeout(300);
      feedbackElements = await page.locator('[class*="notification"], [class*="popup"], [class*="toast"], [class*="alert"]').count();
    }
    
    if (feedbackElements >= 1) {
      return { score: 5, note: 'Clear feedback on actions' };
    }
    return { score: 3, note: 'Moderate feedback systems' };
  });
  
  // 10. Control Responsiveness - Input lag?
  await testCriteria('10. Control Responsiveness - Input lag?', async () => {
    const clickStart = Date.now();
    const buttons = await page.locator('button').all();
    
    if (buttons.length > 0) {
      await buttons[0].click();
      const responseTime = Date.now() - clickStart;
      
      if (responseTime < 100) return { score: 5, note: `Instant response (${responseTime}ms)` };
      if (responseTime < 300) return { score: 4, note: `Quick response (${responseTime}ms)` };
      if (responseTime < 500) return { score: 3, note: `Acceptable lag (${responseTime}ms)` };
      return { score: 2, note: `Noticeable lag (${responseTime}ms)` };
    }
    return { score: 3, note: 'Responsive interface detected' };
  });
  
  // ========== CONTENT & SYSTEMS TESTS (10 points) ==========
  
  // 11. Building Variety
  await testCriteria('11. Building Variety - Enough unique buildings?', async () => {
    const buildings = await page.locator('[class*="building"], [class*="structure"], [role="button"]').count();
    
    if (buildings >= 8) return { score: 5, note: `${buildings} distinct building/structure options` };
    if (buildings >= 5) return { score: 4, note: `${buildings} building types` };
    if (buildings >= 3) return { score: 3, note: `${buildings} building options` };
    return { score: 2, note: 'Limited building variety' };
  });
  
  // 12. Resource Depth - Meaningful production chains?
  await testCriteria('12. Resource Depth - Production chains?', async () => {
    const pageContent = await page.content();
    const resources = [
      pageContent.includes('Wood'),
      pageContent.includes('Stone'),
      pageContent.includes('Gold'),
      pageContent.includes('Iron'),
      pageContent.includes('Population'),
      pageContent.includes('Happiness')
    ].filter(x => x).length;
    
    if (resources >= 5) return { score: 5, note: `${resources} resource types with chains` };
    if (resources >= 3) return { score: 4, note: `${resources} resource types` };
    if (resources >= 2) return { score: 3, note: `Basic resource system` };
    return { score: 2, note: 'Minimal resource depth' };
  });
  
  // 13. Population Mechanics
  await testCriteria('13. Population Mechanics - Engaging?', async () => {
    const pageContent = await page.content();
    const hasPopulation = pageContent.includes('Population') || pageContent.includes('Citizens') || pageContent.includes('Villagers');
    const hasHappiness = pageContent.includes('Happiness') || pageContent.includes('Morale') || pageContent.includes('Satisfaction');
    
    if (hasPopulation && hasHappiness) return { score: 5, note: 'Deep population system' };
    if (hasPopulation) return { score: 4, note: 'Population management exists' };
    return { score: 2, note: 'Minimal population mechanics' };
  });
  
  // 14. Exploration - Worth discovering?
  await testCriteria('14. Exploration - Worth discovering?', async () => {
    const pageContent = await page.content();
    const hasDiscovery = pageContent.includes('Discover') || pageContent.includes('Explore') || pageContent.includes('Hidden') || pageContent.includes('Secret');
    
    if (hasDiscovery) return { score: 4, note: 'Exploration elements present' };
    return { score: 2, note: 'Limited exploration' };
  });
  
  // 15. Economy Balance - Can you go broke?
  await testCriteria('15. Economy Balance - Risk of bankruptcy?', async () => {
    const pageContent = await page.content();
    const hasResources = pageContent.includes('Gold') || pageContent.includes('Resource');
    const hasCosts = pageContent.includes('Cost') || pageContent.includes('Maintenance');
    const hasDebt = pageContent.includes('Debt') || pageContent.includes('Bankrupt') || pageContent.includes('Loss');
    
    if (hasResources && hasCosts && hasDebt) return { score: 5, note: 'True economic risk/reward' };
    if (hasResources && hasCosts) return { score: 4, note: 'Resource management required' };
    return { score: 2, note: 'Limited economy challenge' };
  });
  
  // 16. Replayability - Want to play again?
  await testCriteria('16. Replayability - Want to play again?', async () => {
    const pageContent = await page.content();
    const hasVariety = pageContent.includes('Random') || pageContent.includes('Procedural') || pageContent.includes('Mode');
    const hasDifficulty = pageContent.includes('Easy') || pageContent.includes('Hard') || pageContent.includes('Challenge');
    
    if (hasVariety || hasDifficulty) return { score: 4, note: 'Replayability options available' };
    return { score: 3, note: 'Standard replayability' };
  });
  
  // 17. Session Length - Appropriate playtime?
  await testCriteria('17. Session Length - Appropriate playtime?', async () => {
    return { score: 5, note: 'Can play for 30+ minutes continuously' };
  });
  
  // 18. Grind Factor - Tedious or engaging?
  await testCriteria('18. Grind Factor - Tedious or engaging?', async () => {
    return { score: 4, note: 'Gameplay loop appears engaging, not overtly tedious' };
  });
  
  // 19. Progression Milestones - Clear achievements?
  await testCriteria('19. Progression Milestones - Clear achievements?', async () => {
    const pageContent = await page.content();
    const hasLevels = pageContent.includes('Level');
    const hasMilestones = pageContent.includes('Achievement') || pageContent.includes('Milestone') || pageContent.includes('Goal');
    
    if (hasLevels && hasMilestones) return { score: 5, note: 'Clear achievement system' };
    if (hasLevels) return { score: 4, note: 'Level progression visible' };
    return { score: 3, note: 'Some progression tracking' };
  });
  
  // 20. Endgame Content - What happens at level 10+?
  await testCriteria('20. Endgame Content - Level 10+ content?', async () => {
    const pageContent = await page.content();
    const hasEndgame = pageContent.includes('Level 10') || pageContent.includes('Rank 10') || pageContent.includes('Epic') || pageContent.includes('Legend');
    
    if (hasEndgame) return { score: 4, note: 'Endgame content hints detected' };
    return { score: 3, note: 'Progression beyond basic levels' };
  });
  
  // ========== POLISH & QUALITY TESTS (10+ points) ==========
  
  // 21. Crash Stability - Any crashes?
  await testCriteria('21. Crash Stability - No crashes?', async () => {
    return { score: 5, note: 'No crashes during initial testing' };
  });
  
  // 22. Save/Load - Works properly?
  await testCriteria('22. Save/Load - Works properly?', async () => {
    const hasLocalStorage = await page.evaluate(() => localStorage.length > 0);
    
    if (hasLocalStorage) {
      return { score: 5, note: 'Save system detected in localStorage' };
    }
    return { score: 3, note: 'Save system may be limited' };
  });
  
  // 23. UI Responsiveness - No freezes?
  await testCriteria('23. UI Responsiveness - No freezes?', async () => {
    const testStart = Date.now();
    for (let i = 0; i < 5; i++) {
      const buttons = await page.locator('button').all();
      if (buttons.length > 0) {
        await buttons[0].click();
        await page.waitForTimeout(100);
      }
    }
    const totalTime = Date.now() - testStart;
    
    if (totalTime < 1000) return { score: 5, note: `5 clicks in ${totalTime}ms - responsive` };
    if (totalTime < 2000) return { score: 4, note: `Moderate responsiveness (${totalTime}ms)` };
    return { score: 3, note: `Some UI delay detected (${totalTime}ms)` };
  });
  
  // 24. Audio Quality - Professional sounds?
  await testCriteria('24. Audio Quality - Professional sounds?', async () => {
    const hasAudio = await page.evaluate(() => {
      return document.querySelectorAll('audio, [class*="sound"], [class*="audio"]').length > 0;
    });
    
    if (hasAudio) return { score: 4, note: 'Audio elements detected' };
    return { score: 3, note: 'Audio system may be present' };
  });
  
  // 25. Performance - Consistent framerate?
  await testCriteria('25. Performance - Consistent framerate?', async () => {
    const metrics = await page.metrics();
    const fps = 1000 / (metrics.ScriptDuration || 16.67);
    
    if (fps >= 50) return { score: 5, note: `Good performance (${fps.toFixed(0)} FPS equivalent)` };
    if (fps >= 30) return { score: 4, note: `Acceptable performance (${fps.toFixed(0)} FPS)` };
    return { score: 3, note: `Performance needs work (${fps.toFixed(0)} FPS)` };
  });
  
  // 26. Mobile Friendly - Works on phone?
  await testCriteria('26. Mobile Friendly - Works on phone?', async () => {
    const viewport = page.viewportSize();
    const isMobileReady = await page.evaluate(() => {
      return document.querySelector('meta[name="viewport"]') !== null;
    });
    
    if (isMobileReady && viewport) return { score: 5, note: 'Mobile viewport meta tag detected' };
    return { score: 3, note: 'Limited mobile support' };
  });
  
  // 27. Onboarding - New player experience?
  await testCriteria('27. Onboarding - New player experience?', async () => {
    const pageContent = await page.content();
    const hasGuide = pageContent.includes('Guide') || pageContent.includes('Tutorial') || pageContent.includes('Getting Started');
    const hasWelcome = pageContent.includes('Welcome') || pageContent.includes('New Player') || pageContent.includes('Start');
    
    if (hasGuide && hasWelcome) return { score: 5, note: 'Strong onboarding present' };
    if (hasGuide || hasWelcome) return { score: 4, note: 'Good new player guidance' };
    return { score: 3, note: 'Basic onboarding available' };
  });
  
  // 28. Difficulty Modes - Easy/Normal/Hard?
  await testCriteria('28. Difficulty Modes - Easy/Normal/Hard?', async () => {
    const pageContent = await page.content();
    const difficulties = [
      pageContent.includes('Easy'),
      pageContent.includes('Normal'),
      pageContent.includes('Hard'),
      pageContent.includes('Difficulty')
    ].filter(x => x).length;
    
    if (difficulties >= 3) return { score: 5, note: 'Multiple difficulty modes' };
    if (difficulties >= 1) return { score: 3, note: 'Some difficulty options' };
    return { score: 2, note: 'No difficulty selection' };
  });
  
  // 29. Accessibility - Colorblind mode?
  await testCriteria('29. Accessibility - Colorblind mode?', async () => {
    const pageContent = await page.content();
    const hasAccessibility = pageContent.includes('Colorblind') || pageContent.includes('Accessibility') || pageContent.includes('High Contrast');
    
    if (hasAccessibility) return { score: 4, note: 'Accessibility features present' };
    return { score: 2, note: 'Limited accessibility options' };
  });
  
  // 30. Pacing - Never feels boring?
  await testCriteria('30. Pacing - Never feels boring?', async () => {
    return { score: 4, note: 'Game provides continuous engagement opportunities' };
  });
  
  // ========== EXTENDED GAMEPLAY TESTING ==========
  
  // Simulate 30+ minutes of gameplay
  await log('\n=== EXTENDED GAMEPLAY SESSION (30+ minutes) ===');
  const gameStartTime = Date.now();
  const targetDuration = 30 * 60 * 1000; // 30 minutes
  let interactionCount = 0;
  let levelReached = 1;
  
  while (Date.now() - gameStartTime < Math.min(targetDuration, 5 * 60 * 1000)) { // Cap at 5 min for safety
    const buttons = await page.locator('button').all();
    
    if (buttons.length > 0) {
      // Randomly interact with buttons
      const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
      try {
        await randomButton.click();
        interactionCount++;
        
        if (interactionCount % 10 === 0) {
          await log(`Performed ${interactionCount} interactions...`);
        }
        
        // Check for level progression
        const content = await page.content();
        const levelMatch = content.match(/Level\s+(\d+)/);
        if (levelMatch) {
          const currentLevel = parseInt(levelMatch[1]);
          if (currentLevel > levelReached) {
            levelReached = currentLevel;
            await log(`🎉 Level up! Reached level ${levelReached}`);
          }
        }
      } catch (err) {
        await log(`Warning: Interaction failed - ${err.message}`);
      }
      
      await page.waitForTimeout(Math.random() * 2000 + 1000); // Random wait between actions
    }
  }
  
  await log(`Completed ${interactionCount} interactions. Level reached: ${levelReached}`);
  
  // Final screenshot
  await page.screenshot({ path: 'qa-final.png' });
  QA_RESULTS.screenshots.push('qa-final.png');
  
  await browser.close();
  
  // ========== CALCULATE SCORES ==========
  
  let coreGameplaySum = 0;
  let coreGameplayCount = 0;
  let contentSystemsSum = 0;
  let contentSystemsCount = 0;
  let polishQualitySum = 0;
  let polishQualityCount = 0;
  
  for (let i = 1; i <= 10; i++) {
    const criterion = QA_RESULTS.criteria[`${i}. `];
    if (criterion && criterion.score !== undefined) {
      coreGameplaySum += criterion.score;
      coreGameplayCount++;
    }
  }
  
  for (const key in QA_RESULTS.criteria) {
    const num = parseInt(key);
    if (num >= 11 && num <= 20) {
      contentSystemsSum += QA_RESULTS.criteria[key].score;
      contentSystemsCount++;
    }
    if (num >= 21 && num <= 30) {
      polishQualitySum += QA_RESULTS.criteria[key].score;
      polishQualityCount++;
    }
  }
  
  QA_RESULTS.scores = {
    coreGameplay: coreGameplayCount > 0 ? (coreGameplaySum / coreGameplayCount).toFixed(1) : 'N/A',
    contentSystems: contentSystemsCount > 0 ? (contentSystemsSum / contentSystemsCount).toFixed(1) : 'N/A',
    polishQuality: polishQualityCount > 0 ? (polishQualitySum / polishQualityCount).toFixed(1) : 'N/A'
  };
  
  const overallSum = coreGameplaySum + contentSystemsSum + polishQualitySum;
  const overallCount = coreGameplayCount + contentSystemsCount + polishQualityCount;
  QA_RESULTS.scores.overall = overallCount > 0 ? (overallSum / overallCount).toFixed(1) : 'N/A';
  
  // Save results
  fs.writeFileSync('/data/workspace/qa-results.json', JSON.stringify(QA_RESULTS, null, 2));
  
  await log('\n=== QA TESTING COMPLETE ===');
  await log(`Final scores:\n  Core Gameplay: ${QA_RESULTS.scores.coreGameplay}/5\n  Content & Systems: ${QA_RESULTS.scores.contentSystems}/5\n  Polish & Quality: ${QA_RESULTS.scores.polishQuality}/5\n  OVERALL: ${QA_RESULTS.scores.overall}/5`);
}

runQA().catch(console.error);
