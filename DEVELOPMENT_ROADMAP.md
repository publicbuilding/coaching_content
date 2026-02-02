# Dynasty Ascendant - Development Roadmap

## Project Overview
Building **Dynasty Ascendant**: A city-building empire simulation spanning 800 years of Asian history (Era 1-7). Players guide a domain from feudal villages to imperial powers.

## Current Status: PRE-PRODUCTION (MVP → Alpha)
- Base game framework: ✅ Snake, Poker, WorldBuilder deployed
- WorldBuilder foundation: ✅ Isometric renderer, basic UI, resource system in place
- **Next Phase**: Implement PRD requirements systematically

---

## Phase 1: Foundation Polish & Core UX (Week 1-2)

### Immediate UI/UX Fixes (TODAY/TOMORROW)
- [ ] **Mini-map repositioning**: Move from bottom-left to TOP-RIGHT (cleaner)
- [ ] **Button repositioning**: Move Market Exchange & Save buttons down to avoid top bar overlap
- [ ] **Building palette grouping**: Organize by function (Housing, Production, Military, etc.)
- [ ] **Resource display**: Ensure no text overflow; show production rates clearly

### Week 1-2 Focus
- [ ] Implement Era 1 building grouping (18 buildings organized by type)
- [ ] Add hover tooltips to ALL palette items (name, cost, production)
- [ ] Cleaner UI with adjustable sidebar opacity (H key toggle already works)
- [ ] Production rate display working and visible

---

## Phase 2: Era 1 Content Complete (Week 3-4)

### Buildings (18 total - all Era 1)
**Production (9):**
- [ ] Rice Paddy ✅ (concept)
- [ ] Millet Field
- [ ] Fishing Wharf
- [ ] Hunter's Lodge
- [ ] Woodcutter's Hut ✅ (concept)
- [ ] Stone Quarry
- [ ] Clay Pit
- [ ] Charcoal Burner
- [ ] Weaver's Hut

**Services (5):**
- [ ] Village Well
- [ ] Granary
- [ ] Village Shrine
- [ ] Headman's Hall
- [ ] Healer's Hut

**Infrastructure (4):**
- [ ] Market (village)
- [ ] Dirt Path ✅ (roads exist)
- [ ] Wooden Palisade
- [ ] Watch Tower (basic)

### Production Chains (3 primary)
- [ ] Food production (Paddy/Fishing → Granary)
- [ ] Textiles (Hunter/Weaver → Cloth)
- [ ] Construction materials (Stone/Timber → Building)

### Population System
- [ ] Villager tier (50-200 pop per settlement)
- [ ] Farmer tier (unlock at 50 surplus food)
- [ ] Happiness system affecting growth

---

## Phase 3: Era Progression (Week 5-8)

### Era 2: Age of Lords Content (Week 5-6)
- [ ] 22 new buildings (Iron, Silk, Military, etc.)
- [ ] Samurai/warrior units
- [ ] Castle/temple structures
- [ ] Population tiers 3-4 (Artisans, Warriors)

### Eras 3-7 Planning (Week 7-8)
- [ ] Design passes for each era
- [ ] Technology tree scaffold
- [ ] Building progression paths
- [ ] Victory condition design

---

## Phase 4: Economy & Trade (Week 9-12)

### Production Chain System
- [ ] Multi-input processing (Era 3+)
- [ ] Resource overflow/shortage handling
- [ ] Efficiency calculations
- [ ] Bottleneck identification

### Trade Routes
- [ ] Land routes (caravan)
- [ ] River routes (boats)
- [ ] Maritime routes (era 3+)
- [ ] Price fluctuation system

### Currency Evolution
- [ ] Era 1-2: Barter/commodity money
- [ ] Era 3: Coinage
- [ ] Era 4+: Paper money, banking

---

## Phase 5: Military & Conflict (Week 13-16)

### Unit System
- [ ] Unit types per era
- [ ] Recruitment mechanics
- [ ] Army composition
- [ ] Basic combat resolution

### Warfare
- [ ] Land battles (auto-resolve)
- [ ] Siege mechanics
- [ ] Naval combat (era 3+)
- [ ] War exhaustion system

---

## Phase 6: Diplomacy & Politics (Week 17-20)

### Internal Politics
- [ ] Court system
- [ ] Factions & claims
- [ ] Succession mechanics

### External Diplomacy
- [ ] Relationship tracking
- [ ] Diplomatic actions
- [ ] Alliance/vassalization
- [ ] Trade agreements

---

## Phase 7: Multiplayer Foundation (Week 21-24)

### Multiplayer Architecture
- [ ] Lobby system
- [ ] 2-4 player co-op
- [ ] Turn order/sync mechanics
- [ ] Save game handling

### Competitive Modes
- [ ] 1v1 rapid maps
- [ ] FFA (3-8 players)
- [ ] Team modes

---

## Long-Term Roadmap

### Months 3-6: Polish & Expansion
- Eras 1-3 fully polished
- Community feedback iteration
- Performance optimization
- Mod tools initial release

### Months 6-12: Scale to Release
- All 7 eras complete
- Multiplayer stress-tested
- All 5 cultures playable
- Cosmetic DLC ready

### Year 2+: Post-Launch Support
- Seasonal content
- Major expansions
- Community tournaments
- Ongoing balance updates

---

## Daily Development Schedule

### Each Day (30-60 min standup):
1. Pick 2-3 items from current week's backlog
2. Assign to dev/artist/designer
3. 4-hour focused work blocks
4. Daily playtest (15 min)
5. Document changes in git

### Weekly Review (Friday):
1. Demo new features
2. Identify blockers
3. Adjust next week's priorities
4. Update roadmap if needed

### Monthly Milestone:
1. Vertical slice demo
2. Community update post
3. Major bug review
4. Next month planning

---

## Success Metrics

### Engagement
- Players complete at least 1 era in first session ✅
- Average session 45-90 minutes ✅
- Return rate > 40% after day 1 ✅

### Quality
- All unit tests passing ✅
- Zero critical bugs at launch
- 4+ star reviews on Steam
- Player sentiment positive in community

### Content
- 130+ buildings (across 7 eras)
- 50+ technologies
- 25+ unique units
- 5 playable cultures
- 40-100 hour campaign

---

## Risk Register

| Risk | Mitigation |
|------|------------|
| Scope creep | Strict phase gates; cut list prepared |
| Multiplayer complexity | Start simple (2-player); scale up |
| Balance takes forever | Post-launch patching accepted |
| Performance issues | Benchmarking every 2 weeks |
| Team burnout | Realistic timelines; breaks respected |

---

## Notes for Tomorrow

**Starting Tomorrow:**
1. Fix UI layout (mini-map, buttons, building grouping)
2. Implement Era 1 building tooltips
3. Add production rate display
4. Begin grouping buildings by function in palette

**This Week's Focus:**
- Polish Era 1 UX to Vertical Slice quality
- Ensure all 18 Era 1 buildings display correctly
- Get feedback on building organization/naming

**By End of Month:**
- Playable Era 1 → Era 2 transition
- Working production chains
- Population growth feedback
