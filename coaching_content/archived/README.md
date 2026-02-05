# Archived Materials

This directory contains previous versions, development iterations, and historical artifacts that are no longer used in production.

## 📦 Contents

### Old PDF Versions
- **05-systems-thinking-V1.pdf** through **V5-UPDATED.pdf** - Previous iterations
- **05-systems-thinking-FINAL.pdf** - Earlier final version
- **05-systems-thinking-EXPANDED-FINAL.pdf** - Expanded iteration
- **05-systems-thinking-IMPROVED.pdf** - Development version

These were created during development and should NOT be distributed to customers.

## ⚠️ Important

**DO NOT USE THESE FILES FOR:**
- Customer distribution
- Sales materials
- Marketing promotions
- Public sharing

**USE THESE ONLY FOR:**
- Historical reference
- Understanding development decisions
- Restoring previous versions if needed
- Learning from past approaches

## 📋 Why These Were Archived

The multiple versions exist because:
1. **V1-V3** - Initial development and refinement
2. **IMPROVED** - CSS and design improvements
3. **V4** - Major content revision
4. **V5** - Final refinements
5. **EXPANDED** - Experimental extended version
6. **FINAL** - Production version selected

The final production version is in `/modules/05-systems-thinking/content.pdf`

## 🔄 Version Control

For any module:
- **Production version** → `/modules/XX-*/content.pdf`
- **Previous versions** → Stored here with version number
- **Drafts** → Deleted unless explicitly preserved

All changes are tracked in git, so we can restore any version if needed.

## 📝 Archive Naming Convention

When archiving old versions, use this naming:
```
YYYYMMDD-module-version-description.pdf
```

Examples:
- `20260101-05-systems-thinking-V3.pdf` - January 1, 2026 version
- `20260105-04-teams-DRAFT.pdf` - Draft from January 5, 2026
- `20260110-revised-pricing-experiment.pdf` - Experimental pricing page

## 🗂️ Organizing Archives

Keep archives organized by:
1. **Module number** - What module
2. **Date** - When created
3. **Version** - V1, V2, DRAFT, FINAL, etc.
4. **Description** - What changed

Example:
```
archived/
├── 04-teams-v1-initial-draft.pdf (Jan 1)
├── 04-teams-v2-revised.pdf (Jan 5)
├── 04-teams-v3-final.pdf (Jan 10)
├── 05-systems-thinking-v1-v5/ (6 old versions)
└── experiments/ (dated tests)
```

## ♻️ When to Archive

Archive a file when:
- ✅ It's replaced by a newer version
- ✅ It was a development/draft artifact
- ✅ It's no longer current but might be needed for reference
- ✅ Multiple versions exist and only latest is production

## 🚫 When to Delete

Permanently delete a file when:
- ❌ It's a duplicate (keep only one version)
- ❌ It's outdated and archival value is low
- ❌ It contains sensitive info that should be forgotten
- ❌ It's several years old and unlikely to be referenced

Use git for historical recovery if needed later.

## 📚 Recovery Instructions

If you need to restore an old version:

### From Git History
```bash
# Find the file in git history
git log --name-status | grep "filename"

# Restore from specific commit
git show commit_hash:path/to/file > restored-file.pdf

# Restore from previous date
git checkout `git rev-list -n 1 --before="2026-01-01" HEAD`
```

### From This Archive
1. Copy file from `/archived/`
2. Test it thoroughly
3. If good, move to `/modules/XX-*/content.pdf`
4. Make git commit explaining recovery
5. Document why this version was needed

## 📊 Archive Statistics

- **Total archived files:** 7 PDF versions from module 05
- **Space used:** ~836 MB
- **Oldest file:** V1 from development phase
- **Newest file:** V5 UPDATED from final testing
- **Recommendation:** Keep all for 1 year, then archive older ones

## 🏷️ Versioning System

For future module development, use:
1. **Development:** `module-name-v1.pdf`, `v2.pdf`, etc.
2. **Release candidate:** `module-name-rc1.pdf`, `rc2.pdf`
3. **Final:** `module-name-final.pdf`
4. **Production:** Stored as `content.pdf` in module folder
5. **Updates:** `content-v2.pdf` for major revisions

Keep all versions in archive until production is stable.

## 🔍 Searching Archives

To find an old version:

```bash
# By filename pattern
ls archived/*systems-thinking*

# By date
find archived -newermt "2026-01-01" -oldermt "2026-01-31"

# By size (find extra large versions)
du -sh archived/* | sort -h

# By modification time
ls -lt archived/ | head
```

## ✅ Archive Maintenance

**Monthly tasks:**
1. Review new archived files
2. Update this README.md
3. Clean up accidental duplicates
4. Compress old PDFs if needed
5. Verify backups are up to date

**Quarterly tasks:**
1. Audit entire archive
2. Reorganize if needed
3. Document major decisions
4. Update versioning system
5. Check disk space usage

**Annually:**
1. Archive anything >1 year old to separate storage
2. Update naming conventions if needed
3. Document lessons learned
4. Plan archive retention policy

## 📎 Related Documentation

- **Current versions:** See `/modules/XX-*/content.pdf`
- **Version control:** Check `.git/` for complete history
- **Development notes:** Check git commit messages
- **Archival policy:** See this README.md

## 🔐 Security Considerations

Archived files:
- ✅ Are not deleted (preserved for history)
- ✅ Are not distributed to customers
- ✅ May be restored if production version corrupted
- ✅ Are tracked in git (can be recovered)
- ⚠️ Should not contain sensitive data (already in production files)

## 💡 Best Practices

1. **Archive immediately** - Don't let old versions clutter the modules folder
2. **Use clear names** - Include date and version number
3. **Keep git history** - This is your complete version control
4. **Update README** - Document what's here and why
5. **Organize by module** - Group related versions together

## 📞 Questions

**Q: Should I use files from here?**
A: Only for reference. Use `/modules/XX-*/content.pdf` for production.

**Q: How long should I keep archives?**
A: At least 1 year. Keep git history indefinitely.

**Q: What if a customer asks for an old version?**
A: Check git history. Only provide if specifically requested and approved.

**Q: Can I delete old versions?**
A: After 1 year of being archived, yes. But git history is forever.

---

**Archive Status:** Current ✅  
**Last Organized:** February 5, 2026  
**Retention Period:** 1 year minimum  
**Git History:** Complete (all history available in .git/)

All production content is in `/modules/`. Archived versions are here for reference only.
