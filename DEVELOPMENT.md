# Development Guide

## Quick Start

### Local Development
```bash
# Option 1: Python server (simplest)
python3 serve.py

# Option 2: NPM dev server with auto-reload
npm install
npm run dev
```

## Development Tools Setup

### Install Node.js Tools (Optional)
```bash
# Install development dependencies
npm install

# Or install globally for use across projects
npm install -g prettier htmlhint jshint live-server
```

## Available Commands

### Serving
```bash
# Python server (basic)
python3 serve.py
npm run serve

# Live-reload development server
npm run dev
```

### Code Quality
```bash
# Format code
npm run format              # Auto-fix formatting
npm run format:check        # Check formatting without changes

# Lint code
npm run lint:html          # Check HTML
npm run lint:js            # Check JavaScript
npm run lint               # Check all

# Validate everything
npm run validate           # Format check + lint
```

### Manual Commands
```bash
# Format specific files
prettier --write index.html
prettier --write generate-data.js

# Lint specific files
htmlhint index.html
jshint generate-data.js
```

## File Structure
```
birthday-map/
├── index.html              # Main visualization
├── generate-data.js        # Data generation script
├── data.json              # Generated birthday data
├── serve.py               # Local development server
├── package.json           # Node.js configuration
├── requirements.txt       # Python dependencies (minimal)
├── DEVELOPMENT.md         # This file
├── README.md              # User documentation
└── .gitignore             # Git ignore rules
```

## Code Style

### HTML
- Use double quotes for attributes
- Proper indentation (2 spaces)
- Include alt attributes for accessibility
- Semantic HTML structure

### JavaScript
- ES6+ features allowed
- Consistent indentation (2 spaces)
- Semicolons required
- Single quotes for strings

### General
- 80 character line limit
- Trailing commas in objects/arrays
- Consistent naming conventions

## Data Regeneration
```bash
# Regenerate birthday data
node generate-data.js > data.json

# Serve updated data
python3 serve.py
```

## GitHub Pages Deployment
The site is configured for automatic GitHub Pages deployment:
1. Push to main branch
2. GitHub Actions builds and deploys
3. Site available at your GitHub Pages URL

## Troubleshooting

### Port Issues
If port 8000 is busy:
```bash
# Find process using port
lsof -i :8000

# Kill process
kill -9 <PID>
```

### Permission Issues
```bash
# Make serve.py executable
chmod +x serve.py
```

### Node Dependencies
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules
npm install
```