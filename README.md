# Nocturnal Project

## Introduction

Nocturnal is a stylish and customizable portfolio site template built with GatsbyJS (React) and TailwindCSS. The project uses Github Actions to build the Gatsby site and deploy to Github Pages.

Please visit the [demo site](https://algebananazzzzz.github.io/NocturnalProject/) for a preview.

## Features 

1. **Main feature:** Provides a content abstraction level where all content is sourced from YAML files. Because of this, individuals can create fully personalized and functional portfolio site in less than 5 minutes without touching React code!

2. **CI/CD:** Using Github Actions, every commit will trigger an automation pipeline to build and deploy the site to Github Pages. No manual deployment steps are required. In other words, individuals can deploy their own live portfolio site everytime they push code!

## Prerequisites

There are no prerequisites in this project. However, if you want to develop or customize your portfolio further, you'll need to download `GatsbyJS` to preview your portfolio locally.

1. Install Gatsby on your local machine using this [instructions](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/).

2. After cloning the repository, within the directory, download required npm packages using this command.

```shell
npm install
```

3. Preview the deployment site with this command.

```shell
gatsby develop
```

## Installation 

1. To clone the repository, use this command.

```shell
git clone https://github.com/algebananazzzzz/NocturnalProject.git
```

2. Create a new repository in your GitHub account.

3. Remove the existing git origin.

```shell
git remote rm origin
```

4. Add the new repository as the new git origin.
```shell
git add remote origin ssh://github.com/<your_new_repo>.git
```

## Deployment

> Minimal steps are required as deployment is taken care by Github Actions!

1. Modify pathPrefix (optional):

If your GitHub Pages repository is not served from the root domain (for example, it’s at https://username.github.io/repo-name), set the pathPrefix in `gatsby-config.ts` to "/repo-name". This ensures that your portfolio loads correctly from the repository subpath.

```ts
const config: GatsbyConfig = {
  // Change this according to your repository name
  pathPrefix: `/NocturnalProject`,
  ...
}
```

2. Add and commit your changes

```shell
git add -A
git commit -m "Initial Commit"
```

3. Set checkout branch to main

```shell
git checkout -b main
```

4. Push to remote origin

```shell
git remote set-url origin https://github.com/<your_new_repo>.git
git push --set-upstream origin main
```

## Customizing Your Portfolio Content

> Edit the YAML files to update your portfolio content—no code changes are needed!

Your portfolio content is managed through YAML files under `src/content/`. Each file represents a section of your site, such as **About**, **Projects**, **Skills**, and **Experiences**. You can edit these files to personalize your portfolio.

### General Guidelines

1. **SVG Icons**: Place SVGs in `src/assets/svg` and reference by name in YAML.  
2. **Static Assets**: Place PDFs, images, or videos in `static/`. Reference them with `asset: "filename.ext"` or `video: filename.mp4` for video previews.
3. **Adding Sections**: You can create new sections by following the same YAML structure provided in the files.  
4. **Text Styling**: Use arrays for multiple paragraphs; they are rendered with proper spacing automatically.


### 1. Navbar Section (`navbar.yml`)
```yaml
title: "My Portfolio"

contact_buttons:
  - svgName: "contact/gitlab"
    link: "https://gitlab.com/<your_account>"
  - svgName: "contact/github"
    link: "https://github.com/<your_account>"
  - svgName: "contact/linkedin"
    asset: "dummy.pdf"

external_links:
  - title: "Blog"
    link: "https://docs.example.com/blog"
  - title: "Resume"
    asset: "dummy.pdf"
```

- **title**: The main title displayed in your navbar.  
- **contact_buttons**: List of social or contact links. Use `svgName` for an icon (placed under `src/assets/svg`). Use `link` for external URLs or `asset` for static files in `/static`.  
- **external_links**: Additional links displayed in the navbar. Use `link` for external URLs or `asset` for static files.


### 2. About Section (`about.yml`)

```yaml
description:
  - "Welcome to my portfolio page! 🌱"
  - "As a [Your Profession], I [Your Professional Statement]."
endeavours:
  - text: "I'm aspiring to pass the XXX Certification"
    svgName: "aws"
```

- **title**: Your main introduction line.  
- **description**: Array of paragraphs to display under your title.  

### 3. Projects (`projects.yml`)

```yaml
description:
  - "Explore my projects and showcase your expertise."
projects:
  - name: Project Name
    description: "Short summary of the project"
    additional_description: "Detailed project description"
    date: "Apr 2024"
    svgIcons:
    - gatsby
    - react
    actions:
    - text: Repo
      link: "https://github.com/username/project"
    - text: Demo
      video: "demo.mp4"
```

- **description**: Intro text for the Projects section.  
- **projects**: List of projects.  
- **description / additional_description (optional)**: Short and long descriptions.  
- **date (optional)**: When the project was done.  
- **svgIcons (optional)**: List of tech/tool icons used.  
- **actions (optional)**: Buttons linking to Repo, Demo, or other resources. Use `link` for external URLs, `video` for local video files in `/static`.

- **Other Sections**: Categories like `Upcoming Projects` or `Archived Projects` can be added with the same structure.

### 4. Skills (`skills.yml`)

```yaml
description:
  - "Discover my skills and certifications."
certificates:
  - text: "AWS Certified XXX"
    link: "https://www.credly.com/.../badge"
    svgName: aws
skillicons:
  - gatsby
  - react
  - tailwindcss
  - aws
  - terraform
  - docker
skills:
  Proficient:
    - "Skill 1 description"
    - "Skill 2 description"
  Competent:
    - "Skill 3 description"
    - "Skill 4 description"
```

- **certificates (optional)**: List certifications with optional link and SVG icon.  
- **skillicons (optional)**: Technologies to showcase visually.  
- **skills (optional)**: Group skills under sections like `Proficient` (you may add your own section e.g. `Foundational`).

### 5. Experiences (`experiences.yml`)

```yaml
description:
  - "Learn about my professional experiences."
experiences:
  - name: "Internship: Company Name"
    description:
    - "Task details 1"
    - "Task details 2"
    date: "Start - End"
    color: blue
    actions:
    - text: "Recommendation Letter"
      asset: "letter.pdf"
```

- **description**: Intro for the Experiences section.  
- **experiences**: List of experiences.  
- **description (optional)**: Array of tasks/responsibilities.  
- **date**: Time period.  
- **color (optional)**: Tailwind color for the experience card.  
- **actions (optional)**: Links to resources (`link` for external, `asset` for `/static` files).


## License and Contribution

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for more details.

We welcome contributions to this project! Whether it's reporting a bug, discussing a feature, or submitting a pull request, your involvement is appreciated.
