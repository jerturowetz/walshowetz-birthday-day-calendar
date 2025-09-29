#!/bin/bash

echo "🎂 Walshowetz Birthday Day Calendar - GitHub Setup"
echo "=================================================="

# Check if we're in a git repo
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Run 'git init' first."
    exit 1
fi

echo ""
echo "📋 Next steps:"
echo ""
echo "1. Create repository on GitHub:"
echo "   Go to: https://github.com/jerturowetz"
echo "   Name: walshowetz-birthday-day-calendar"
echo "   Description: Interactive birthday day calendar showing weekday patterns for the Walshowetz family"
echo ""
echo "2. After creating the repo, run these commands:"
echo ""
echo "   git remote add origin https://github.com/jerturowetz/walshowetz-birthday-day-calendar.git"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   Settings → Pages → Deploy from branch 'main'"
echo ""
echo "4. Your site will be at:"
echo "   https://jerturowetz.github.io/walshowetz-birthday-day-calendar"
echo ""
echo "🔒 Privacy Note:"
echo "   - Site has noindex meta tags (won't appear in search engines)"
echo "   - Public repo = free GitHub Pages"
echo "   - Private repo = requires paid GitHub plan for Pages"
echo ""
echo "✅ Repository is ready to push!"