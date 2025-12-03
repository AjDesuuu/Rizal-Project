# José Rizal Interactive Roadmap

An interactive web-based roadmap showcasing José Rizal's journey from childhood to becoming a national hero. Click on each stage to explore detailed information about his writings, key characters, ideas, emotions, symbolism, and impact on Philippine nationalism.

## 🚀 Features

- **Interactive Timeline**: Vertical roadmap with 8 key stages (A-H) of Rizal's life
- **Expandable Cards**: Click any stage to reveal detailed information
- **Beautiful Design**: Modern dark theme with gradient colors and smooth animations
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Organized Content**: Each stage includes:
  - Summary
  - Writings involved
  - Key characters
  - Core ideas
  - Emotions
  - Symbolism
  - Historical relevance
  - Impact on Rizal

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/downloads)
- A code editor like **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

## 🛠️ Setup Instructions

### Step 1: Clone the Repository

Open your terminal (Command Prompt, PowerShell, or Git Bash) and run:

```bash
git clone https://github.com/AjDesuuu/Rizal-Project.git
```

### Step 2: Navigate to the Project Folder

```bash
cd Rizal-Project
```

### Step 3: Install Dependencies

This will install all the necessary packages (React, Vite, Tailwind CSS, etc.):

```bash
npm install
```

**Note**: This may take a few minutes. Wait for it to complete.

### Step 4: Start the Development Server

```bash
npm run dev
```

You should see output like this:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 5: Open in Browser

Open your web browser and go to:
```
http://localhost:5173/
```

You should now see the Rizal Interactive Roadmap! 🎉

## 🎨 Project Structure

```
Rizal-Project/
├── src/
│   ├── main.jsx           # App entry point
│   ├── index.css          # Global styles and animations
│   └── RizalFlowchart.jsx # Main roadmap component
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## 💻 Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🔧 Troubleshooting

### Issue: "npm: command not found" or "node: command not found"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/). After installation, restart your terminal.

### Issue: Port 5173 is already in use
**Solution**: 
- Close any other application using that port, or
- Vite will automatically use the next available port (5174, 5175, etc.)

### Issue: Changes not reflecting in browser
**Solution**: 
- Make sure the dev server is running (`npm run dev`)
- Hard refresh your browser (Ctrl + Shift + R or Cmd + Shift + R)
- Check the terminal for any error messages

### Issue: "Module not found" errors
**Solution**: Delete `node_modules` folder and reinstall:
```bash
rm -rf node_modules
npm install
```

## 🌐 Deploying to Production

### Option 1: Vercel (Recommended - Free)
1. Create account at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Deploy! (Vercel auto-detects Vite settings)

### Option 2: Netlify (Free)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder after running `npm run build`

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/Rizal-Project/',
     // ... other config
   })
   ```
4. Run: `npm run deploy`

## 📚 Technologies Used

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 👥 For Group Members

### Making Changes

1. **Pull latest changes** before starting work:
   ```bash
   git pull origin main
   ```

2. **Make your changes** in the code editor

3. **Test your changes** - make sure `npm run dev` works

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```

### Editing the Roadmap Content

To modify the stages/content, edit `src/RizalFlowchart.jsx`:
- Look for the `stages` array (starts around line 6)
- Each stage object contains all the information
- Modify the text, add new stages, or change colors

### Changing Colors

Each stage has a `color` property with Tailwind gradient classes:
- `from-emerald-500 to-teal-600` (green)
- `from-amber-500 to-orange-600` (orange)
- `from-blue-500 to-indigo-600` (blue)
- etc.

## 📖 The 8 Stages

| Stage | Title | Period |
|-------|-------|--------|
| A | Childhood and Early Influences | 1861-1872 |
| B | Sa Aking Mga Kababata | Circa 1869 |
| C | A La Juventud Filipina | 1879 |
| D | The Elias Narrative (Noli Me Tangere) | 1887 |
| E | Conclusion of El Filibusterismo | 1891 |
| F | Letter to the Young Women of Malolos | 1889 |
| G | La Liga Filipina | 1892 |
| H | Mi Último Adiós | 1896 |

## 📝 License

This project is for educational purposes.

## 🤝 Contributing

Group members can contribute by:
1. Forking the repository
2. Creating a feature branch
3. Making changes
4. Submitting a pull request

Or simply push directly to main if you have write access.

## 📧 Contact

For questions or issues, contact the project maintainer or create an issue on GitHub.

---

**"The youth is the hope of our fatherland."** — José Rizal
