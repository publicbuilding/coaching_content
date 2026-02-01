# Asset Development - Implementation Action Plan

**Project:** Asian-themed isometric city builder game  
**Start Date:** February 1, 2026  
**Goal:** Complete asset foundation for playable prototype  
**Recommended Timeline:** 4-6 weeks

---

## PHASE 1: FREE ASSET FOUNDATION (Week 1)

### Step 1.1: Download Kenney.nl Assets (30 minutes)
**Action Items:**
- [ ] Visit https://kenney.nl/assets
- [ ] Download "City" pack (buildings, roads, decorations)
- [ ] Download "Characters" pack (NPCs and creatures)
- [ ] Download "UI" pack (buttons, menus, panels)
- [ ] Download "Isometric" pack (environment elements)
- [ ] Extract to `/assets/kenney/` folder
- [ ] Document file paths and credits

**Output:** ~400+ free, professionally designed assets

**Time:** 30 minutes  
**Cost:** $0

---

### Step 1.2: Research OpenGameArt Assets (1 hour)
**Action Items:**
- [ ] Visit https://opengameart.org
- [ ] Search for: "isometric" + "pixel" + "free"
- [ ] Search for: "Asian" + "buildings" + "free"
- [ ] Look for LPC (Liberated Pixel Cup) packs
- [ ] Evaluate 5-10 top results for quality
- [ ] Download 3-5 best-matching packs
- [ ] Extract to `/assets/opengameart/` folder
- [ ] Document licenses (CC0, CC-BY, etc.)

**Evaluation Criteria:**
- Resolution matches Kenney (32x32 or 64x64)
- Isometric perspective is consistent
- Quality is professional (no obviously poor work)
- License allows commercial use

**Output:** 3-5 supplementary asset packs

**Time:** 1 hour  
**Cost:** $0

---

### Step 1.3: Search itch.io for Themed Packs (30 minutes)
**Action Items:**
- [ ] Visit https://itch.io/game-assets
- [ ] Filter: "Free" + "Game assets"
- [ ] Search: "isometric"
- [ ] Search: "pixel art Asian"
- [ ] Search: "city builder"
- [ ] Download 3-5 top free packs matching criteria
- [ ] Extract to `/assets/itch/` folder

**Output:** 3-5 specialized theme packs

**Time:** 30 minutes  
**Cost:** $0

---

### Step 1.4: Asset Inventory & Organization (1 hour)
**Action Items:**
- [ ] Create asset inventory spreadsheet:
  ```
  | Name | Source | Type | Resolution | Frames | License | Status |
  |------|--------|------|-----------|--------|---------|--------|
  | Kenney Buildings | kenney.nl | Building | 64x64 | 1 | CC0 | Ready |
  ```
- [ ] Organize folders by category:
  - `/assets/buildings/`
  - `/assets/characters/`
  - `/assets/ui/`
  - `/assets/ground/`
  - `/assets/decorations/`
  - `/assets/effects/`
- [ ] Test: Load largest asset into game engine
- [ ] Document resolution and scale factors

**Output:** Organized asset library with inventory

**Time:** 1 hour  
**Cost:** $0

**PHASE 1 TOTALS:**
- **Time:** 3 hours
- **Cost:** $0
- **Assets Acquired:** 40-60 unique items
- **Outcome:** Ready for prototyping

---

## PHASE 2: VALIDATE & CUSTOMIZE (Week 2)

### Step 2.1: Test Assets in Engine (2 hours)
**Action Items:**
- [ ] Import largest asset pack into game engine
- [ ] Test visual consistency
- [ ] Check for resolution mismatches
- [ ] Test animation frame sequences
- [ ] Verify transparency/alpha channels
- [ ] Screenshot problematic assets
- [ ] Document issues

**Output:** Quality assessment report

**Time:** 2 hours

---

### Step 2.2: Install Piskel (Free Option) (20 minutes)
**Action Items:**
- [ ] Visit https://www.piskelapp.com
- [ ] Choose: Browser version OR Desktop download
- [ ] If desktop: Download for Windows/Mac/Linux
- [ ] Create test project
- [ ] Import one Kenney asset
- [ ] Test recolor workflow
- [ ] Document process

**Output:** Working Piskel setup

**Time:** 20 minutes  
**Cost:** $0

---

### Step 2.3: Recolor Assets for Consistency (2-3 hours, iterative)
**Action Items:**
- [ ] Select 5-10 key assets to recolor for theme
- [ ] Define color palette (recommend 40-60 colors max)
- [ ] Create palette file in Piskel
- [ ] Recolor assets one-by-one:
  1. Import asset into Piskel
  2. Select current colors
  3. Replace with theme colors
  4. Export as PNG
  5. Save to `/assets/custom/`
- [ ] Test recolored assets in engine

**Output:** Recolored, cohesive asset set

**Time:** 2-3 hours  
**Cost:** $0

---

### Step 2.4: Validate Game-Ready Asset Pack (1 hour)
**Action Items:**
- [ ] Build playable prototype scene with free assets
- [ ] Test visual consistency across all assets
- [ ] Check for obvious gaps (missing essential assets?)
- [ ] Evaluate: Can game be made with ONLY free assets?
- [ ] Decision point: Continue free-only OR commission custom work?

**Decision Tree:**
- ✅ "Looks great, feels cohesive" → Consider free-only route
- ⚠️ "Good but missing cultural specifics" → Proceed to Phase 3 (commission)
- ❌ "Needs significant work" → Delay until Phase 4

**Output:** Prototype validation + go/no-go decision

**Time:** 1 hour

**PHASE 2 TOTALS:**
- **Time:** 5-6 hours
- **Cost:** $0
- **Outcome:** Validated free asset foundation

---

## PHASE 3: COMMISSION CUSTOM ASIAN ELEMENTS (Weeks 2-4)

**ONLY PROCEED IF Phase 2 validation shows gaps or need for cultural specificity**

### Step 3.1: Prepare Fiverr Commission Brief (1-2 hours)
**Action Items:**
- [ ] Create detailed brief document:
  ```
  PROJECT BRIEF
  - Game: Asian-themed isometric city builder
  - Style: Pixel art, similar to Stardew Valley/Spiritfarer
  - Resolution: 64x64 sprites (or specify your choice)
  - Assets needed:
    1. NPCs: 3-4 unique Asian characters with animations
    2. Buildings: 5-6 Asian-themed structures
    3. Decorations: Lanterns, banners, cultural elements
    4. UI: Custom themed buttons/panels (optional)
  - Color palette: [ATTACH PALETTE IMAGE]
  - Reference images: [ATTACH 5-10 examples]
  - Timeline: [Your deadline]
  - Revisions: [How many included?]
  - Commercial use: Yes (include in brief)
  ```
- [ ] Prepare reference images folder
- [ ] Create color palette guide
- [ ] Calculate total budget

**Output:** Professional commission brief

**Time:** 1-2 hours

---

### Step 3.2: Find Fiverr Artist & Request Portfolio (1-2 hours)
**Action Items:**
- [ ] Go to https://www.fiverr.com
- [ ] Search: "pixel art game assets" OR "isometric game sprites"
- [ ] Filter by: Rating (4.8+), Asian artists (optional), pricing ($50+ indicates quality)
- [ ] Review 10+ artist portfolios
- [ ] Shortlist 3-5 candidates with:
  - Strong isometric examples
  - Animation capability
  - Positive reviews mentioning revisions/quality
  - Clear communication (good English if needed)
- [ ] Message each: Ask if they can do custom Asian-themed pixel art
- [ ] Send brief overview (not full brief yet)
- [ ] Request sample pricing for your scope

**Selection Criteria:**
- ✅ Portfolio shows isometric pixel art
- ✅ Recent reviews mention "game assets"
- ✅ Artist responsive to messages
- ✅ Pricing seems reasonable (~$400-600 for character set)
- ✅ Can commit to timeline

**Output:** 3-5 shortlisted Fiverr artists

**Time:** 1-2 hours

---

### Step 3.3: Order Test/Sample Work (Optional, $20-50)
**Action Items:**
- [ ] Choose top artist from shortlist
- [ ] Propose test commission: "Create 1 sample Asian NPC sprite (64x64, 3 walking frames)"
- [ ] Budget: $20-50 for test
- [ ] Set timeline: 3-5 days
- [ ] Provide brief with reference images
- [ ] Wait for delivery
- [ ] Evaluate:
  - Does it match style/vision?
  - Quality as expected?
  - Communication clear?
- [ ] Decision: Proceed with full order OR try another artist?

**Output:** Proof of artist quality

**Time:** Waiting (5-7 days)  
**Cost:** $20-50 (optional, recommended)

---

### Step 3.4: Place Full Commission Order (2-4 weeks)
**Action Items (if test passed):**
- [ ] Send full brief to selected artist
- [ ] Confirm scope:
  - Asset list (characters, buildings, decorations)
  - Resolution and animation frames
  - Color palette requirements
  - Revision/approval process
  - Final delivery format (PNG, sprite sheet, etc.)
- [ ] Confirm pricing: Total for full scope
- [ ] Set expectations:
  - Delivery timeline (2-4 weeks typical)
  - Revision rounds (usually 1-3 included)
  - Approval process (how/when to provide feedback?)
  - Final payment terms

**Full Commission Budget Recommendations:**
- 3-4 Asian NPCs: $400-600
- 5-6 Asian buildings: $300-500
- Cultural decorations: $200-300
- **Total: $900-1,400** (single artist)

OR

- Multiple artists for different specialties: $1,500-2,000

**Output:** Active commission order

**Time:** 2-4 weeks (artist working)

---

### Step 3.5: Review & Integration (1-2 weeks)
**Action Items:**
- [ ] Receive artwork from artist
- [ ] Review in detail:
  - [ ] Resolution matches specification
  - [ ] Isometric perspective consistent
  - [ ] Color palette follows guide
  - [ ] Animation frames correct count
  - [ ] File formats as specified
  - [ ] Commercial license granted
- [ ] Provide feedback (if needed)
- [ ] Request revisions if necessary (plan for 1-2 revision rounds)
- [ ] Integrate into asset library once approved
- [ ] Test in game engine
- [ ] Document new assets in inventory

**Output:** Approved, integrated custom assets

**Time:** 1-2 weeks

**PHASE 3 TOTALS:**
- **Time:** 4-6 weeks (mostly waiting for artist)
- **Cost:** $900-1,400+ (or $0 if skipping)
- **Outcome:** Custom Asian-themed asset library

---

## PHASE 4: POLISH & ITERATION (Ongoing)

### Step 4.1: Tool Decision (1 hour decision)
**Action Items:**
- [ ] Evaluate: Do you need Aseprite?
  - Yes if: Creating many custom sprites, need advanced animations
  - No if: Using primarily Piskel or pre-made assets
- [ ] If yes: Purchase Aseprite ($20 on Steam or https://www.aseprite.org)
- [ ] If no: Continue with free Piskel

**Cost:** $0-20

---

### Step 4.2: Continuous Asset Curation (Ongoing)
**Action Items (recurring):**
- [ ] Weekly: Play test game with current assets
- [ ] Identify gaps (missing assets, visual inconsistencies)
- [ ] Prioritize: What's critical for gameplay?
- [ ] Options for gaps:
  1. Create with Piskel (free, 30-60 min per asset)
  2. Search OpenGameArt/itch.io (free, 15-30 min)
  3. Commission from Fiverr ($20-100 per custom piece)
- [ ] Batch commissions for efficiency (multiple items per order)

---

### Step 4.3: Documentation & Handoff (1 hour)
**Action Items (once gameplay is solid):**
- [ ] Final asset inventory with all details
- [ ] License documentation (ensure all CC0/CC-BY credited)
- [ ] Sprite sheet exports for final game build
- [ ] Color palette document
- [ ] Art style guide for future additions

---

## TIMELINE OVERVIEW

```
Week 1
├─ Day 1: Download Kenney.nl assets
├─ Day 2: Search OpenGameArt & itch.io
├─ Day 3: Organize assets & create inventory
├─ Day 4-5: Test in engine, validate free assets

Week 2
├─ Day 1-2: Install Piskel, learn basics
├─ Day 2-5: Recolor/customize free assets
├─ Day 6: Validate prototype scene
└─ Decision: Commission custom work?

Weeks 2-3 (PARALLEL: If commissioning)
├─ Day 1-2: Prepare Fiverr brief
├─ Day 2-3: Find & contact artists
├─ Optional: Test work with one artist ($20-50)

Weeks 3-6
├─ Commission execution (artist working)
├─ Continue development with free assets
└─ Maintain asset inventory

Week 6+
├─ Review commissioned work
├─ Integration into game
├─ Iteration based on feedback
└─ Final asset cleanup
```

---

## SUCCESS METRICS

✅ **Phase 1 Complete When:**
- [ ] 40-60 free assets organized
- [ ] Asset inventory created
- [ ] Assets tested in engine
- [ ] No fatal inconsistencies

✅ **Phase 2 Complete When:**
- [ ] Prototype scene renders without visual artifacts
- [ ] Asset consistency verified
- [ ] Decision made on custom commission

✅ **Phase 3 Complete When:**
- [ ] Custom assets received & approved
- [ ] Integrated into game build
- [ ] No legal/licensing issues

✅ **Phase 4 Complete When:**
- [ ] Game visually cohesive
- [ ] No obvious asset gaps
- [ ] Playable demo ready
- [ ] Documentation complete

---

## BUDGET SUMMARY

| Phase | Time | Cost (Min) | Cost (Rec) | Cost (Max) |
|-------|------|-----------|-----------|-----------|
| Phase 1 | 3 hrs | $0 | $0 | $0 |
| Phase 2 | 5-6 hrs | $0 | $0 | $20 (Aseprite) |
| Phase 3 | 4-6 wks | $0 | $1,000 | $2,000 |
| Phase 4 | Ongoing | $0 | $200/mo | $500/mo |
| **TOTAL** | **4-6 wks** | **$0** | **$1,000-1,200** | **$2,500+** |

---

## RISK CHECKLIST

- [ ] Downloaded Kenney assets (backup location)
- [ ] Verified licenses on all free assets
- [ ] Tested asset resolution consistency
- [ ] Created backup of all assets
- [ ] Fiverr artist portfolio verified before commission
- [ ] Brief document shared (with reference images)
- [ ] Contract/terms understood with Fiverr artist
- [ ] Commercial use explicitly confirmed
- [ ] Revision terms agreed (usually 1-3 rounds)
- [ ] Final file formats specified
- [ ] Color palette aligned before art creation

---

## DECISION TREE: Free vs Commission

```
Are you satisfied with free asset prototype?
│
├─ YES: "Looks great, feels cohesive"
│   └─ Action: Ship with free assets + save budget
│       └─ Time: 2-3 weeks development
│       └─ Cost: $0-20 (optional Aseprite)
│
└─ NO: "Missing cultural specifics or visual polish"
    │
    ├─ Small gaps: "Just need 3-5 specific items"
    │   └─ Action: Commission small batch ($300-500)
    │       └─ Time: 4-6 weeks total
    │       └─ Cost: $300-500
    │
    └─ Major gaps: "Needs significant custom work"
        └─ Action: Commission full package ($1,500-2,000)
            └─ Time: 6-8 weeks total
            └─ Cost: $1,500-2,000
```

---

## NEXT IMMEDIATE ACTION

**THIS WEEK:**
1. Download Kenney assets (30 min)
2. Search OpenGameArt + itch.io (1 hour)
3. Organize into game project (30 min)
4. Test in engine (1 hour)

**By end of week:** You'll have 40+ production-ready assets to build with.

---

**Document Status:** Ready to execute  
**Last Updated:** February 1, 2026  
**Questions?** Refer to ASSET_RESEARCH_REPORT.md or ASSET_QUICK_REFERENCE.md
