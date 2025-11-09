# Nocturnal Project

> **A stylish, dark-mode portfolio template you can customize in 5 minutes—no coding required.**

🌐 **[View Demo Site](https://algebananazzzzz.github.io/NocturnalProject/)**

---

## Why Nocturnal?

✨ **5-Minute Setup** – Edit YAML files, push to GitHub, done
🎨 **Beautiful by Default** – Modern design with dark mode built-in
⚡ **Zero Code Changes** – Customize everything through simple YAML files
🚀 **Auto-Deploy** – GitHub Actions builds and deploys automatically
📱 **Fully Responsive** – Looks great on mobile, tablet, and desktop
🛠️ **Production Ready** – Built with React, Gatsby, and TailwindCSS

---

## Quick Start

# 1. Clone and install
```bash
git clone https://github.com/algebananazzzzz/NocturnalProject.git
cd NocturnalProject
npm install
```

2. Preview locally, visit http://localhost:8000
```bash
gatsby develop
```

3. Customize content (edit YAML files in src/content/)
   - navbar.yml       (your name, social links)
   - aboutme.yml      (introduction, bio)
   - project.yml      (your projects)
   - skills.yml       (technical skills, certifications)
   - experience.yml   (work history, timeline)

4. Deploy to GitHub Pages
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git add -A && git commit -m "My portfolio"
git push -u origin main
```

**That's it!** GitHub Actions will automatically build and deploy your site.

---

## What You Get

### 🎯 Ready-to-Use Sections
- **About** – Introduction with custom sections (education, interests, etc.)
- **Projects** – Showcase with tech stack icons, demos, and videos
- **Skills** – Certifications, tech icons, and skill categories
- **Experiences** – Professional timeline with color-coded milestones

### 🎨 Built-in Features
- Dark/light mode with one-click toggle
- Responsive navigation
- Video popup modals for project demos
- Social contact buttons
- Custom SVG icon system
- PDF/document attachments

### ⚙️ Technical Stack
- **Gatsby** – Blazing fast static site generation
- **React** – Modern component architecture
- **TailwindCSS** – Utility-first styling
- **TypeScript** – Type-safe development
- **GitHub Actions** – Automated CI/CD pipeline

---

## Documentation

Choose the guide that fits your needs:

| Guide | For | What's Inside |
|-------|-----|---------------|
| **[Getting Started](docs/GETTING_STARTED.md)** | First-time users | Installation, local dev, deployment |
| **[Customization Guide](docs/CUSTOMIZATION.md)** | Content editors | YAML file reference with examples |
| **[Developer Guide](docs/DEVELOPER_GUIDE.md)** | Code contributors | Architecture, components, styling |

**Quick links:**
- [How to customize content?](docs/CUSTOMIZATION.md) – Complete YAML reference
- [How to deploy?](docs/GETTING_STARTED.md#deployment) – GitHub Pages setup
- [How to modify styles?](docs/DEVELOPER_GUIDE.md#styling-with-tailwind) – Tailwind customization

---

## Customization

All content is managed through **5 simple YAML files** in `src/content/`:

| File | What to Edit |
|------|--------------|
| `navbar.yml` | Your name, social links |
| `aboutme.yml` | Introduction, bio, education |
| `project.yml` | Projects, demos, tech stacks |
| `skills.yml` | Certifications, technologies |
| `experience.yml` | Work history, achievements |

**Also customize:**
- **SVG Icons** – Add custom icons to `src/assets/svg/`
- **Static Files** – PDFs, videos, images in `static/`

**📚 [Complete customization guide →](docs/CUSTOMIZATION.md)** – YAML reference, SVG management, examples

---

## Deployment

### GitHub Pages (Recommended)

1. **Create a new GitHub repository**
2. **Push your code:**
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch `gh-pages`

**Your site will be live at:** `https://YOUR_USERNAME.github.io/YOUR_REPO/`

GitHub Actions automatically rebuilds your site on every push.

**📚 [Detailed deployment guide →](docs/GETTING_STARTED.md#deployment)**

---

## Project Structure

```
NocturnalProject/
├── src/
│   ├── content/          ← Edit these YAML files to customize
│   │   ├── navbar.yml
│   │   ├── aboutme.yml
│   │   ├── project.yml
│   │   ├── skills.yml
│   │   └── experience.yml
│   ├── assets/svg/       ← Add custom icons here
│   └── pages/            ← React components (no changes needed)
├── static/               ← Place PDFs, images, videos here
└── docs/                 ← Documentation guides
```

---

## FAQ

**Q: Do I need to know React/Gatsby?**
A: Nope! Just edit YAML files. No coding needed for content changes.

**Q: Can I change colors and styles?**
A: Yes! See the [Developer Guide](docs/DEVELOPER_GUIDE.md#styling-with-tailwind) for Tailwind customization.

**Q: How do I add my resume/CV?**
A: Place your PDF in `static/` and reference it in `navbar.yml`. [Example →](docs/CUSTOMIZATION.md#navbar-configuration)

**Q: Can I add custom sections?**
A: Absolutely! YAML files support any custom sections you create. [Guide →](docs/CUSTOMIZATION.md#advanced-tips)

**Q: Is dark mode automatic?**
A: Yes! Visitors can toggle between light/dark mode, and their preference is saved.

---

## Examples

Want inspiration? Check out these sections in the demo:

- [About Page](https://algebananazzzzz.github.io/NocturnalProject/) – Custom sections with icons
- [Projects](https://algebananazzzzz.github.io/NocturnalProject/projects) – Tech stack display
- [Skills](https://algebananazzzzz.github.io/NocturnalProject/skills) – Certifications and icons
- [Experiences](https://algebananazzzzz.github.io/NocturnalProject/experiences) – Timeline with colors

---

## License

MIT License – See [LICENSE.txt](LICENSE.txt) for details.

**Feel free to use this template for your portfolio!** If you find it useful, consider giving it a star ⭐

---

## Contributing

Contributions are welcome! Whether it's:
- 🐛 Bug reports
- 💡 Feature suggestions
- 🔧 Code improvements
- 📚 Documentation updates

**[Open an issue](https://github.com/algebananazzzzz/NocturnalProject/issues)** or submit a pull request.

---

**Made with ❤️ using Gatsby, React, and TailwindCSS**
