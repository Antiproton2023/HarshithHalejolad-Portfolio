# Minimalist Portfolio

A clean, minimalist black-and-white personal portfolio website built with Next.js 14, Tailwind CSS, and Markdown.

## Features

- 📄 **Markdown Powered**: Edit your portfolio, projects, achievements, and blog just by writing Markdown files.
- 🎨 **Minimalist Design**: Typography-focused, monochrome (black and white) palette.
- 🚀 **Next.js 14 (App Router)**: Fast, SEO-friendly, and modern framework.
- 💅 **Tailwind CSS**: Utility-first styling with custom typography plugin.
- 💻 **Responsive**: Looks great on desktop and mobile.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

All content is managed through Markdown (`.md`) files in the `/content` directory.

### Directory Structure

- `/content/home/`: Contains `hero.md` (home top section) and `teasers.md` (home featured sections).
- `/content/projects/`: Add a `.md` file for each project here. They will automatically show up on the `/projects` page.
- `/content/achievements/`: Add a `.md` file for each achievement. 
  - *To add an image to an achievement card, put the image file inside the `public/images/` directory and add `image: "/images/your-image.jpg"` to the `.md` frontmatter.*
- `/public/resume.pdf`: This is your physical resume file. Replace it with your actual PDF to update the `/resume` page and "Download PDF" links.
- `/content/blog/`: Add blog posts here. Supports markdown + syntax highlighting.

### Examples

**Adding a Project (`/content/projects/my-new-project.md`)**:
```markdown
---
title: "My Awesome Project"
description: "A short snippet about what it does."
date: "2024-05-10"
link: "https://github.com/..."
tags: ["Next.js", "React"]
---

Here is the full description of my project...
```

**Adding a Blog Post (`/content/blog/first-post.md`)**:
```markdown
---
title: "Hello World"
description: "My first blog post."
date: "2024-05-11"
tags: ["Welcome"]
---

Welcome to my new blog!
```

## Deployment on Vercel

This project is explicitly configured for seamless deployment on Vercel.

1. Push your code to a GitHub repository.
2. Sign up / Log in to [Vercel](https://vercel.com/).
3. Click "Add New..." -> "Project".
4. Import your GitHub repository.
5. Vercel will automatically detect Next.js. Simply click **Deploy**.
6. Whenever you push to the `main` branch, Vercel will automatically rebuild and deploy your updates.

---

Built with Next.js 14.
