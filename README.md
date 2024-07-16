<h1 align="center">
  Portfolio - v3.0
</h1>
<p align="center">
  Built with Nextjs and hosted on Vercel.
</p>
 <div align="center">
 <p>

[![Open Source Love svg1](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/AntonyJudeShaman/)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=103)](https://github.com/ellerbrock/typescript-badges/)
![Visitors](https://api.visitorbadge.io/api/visitors?path=AntonyJudeShaman/Portfolio-3.0&countColor=blue&style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/AntonyJudeShaman/Portfolio-3.0?color=blue)
![GitHub repo size](https://img.shields.io/github/repo-size/AntonyJudeShaman/Portfolio-3.0?color=blue)

 </p>
 </div>
 
This repository contains the code for my personal portfolio. Please give it a ⭐ if u like it😊.

### Deploy blog separately

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAntonyJudeShaman%2FPortfolio-3.0%2Ftree%2Fmain%2FBlog&project-name=Portfolio&repository-name=Portfolio-3.0&env=NEXT_PUBLIC_GITHUB_TOKEN&envDescription=Required)

### Deploy the main portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAntonyJudeShaman%2FPortfolio-3.0&project-name=Portfolio&repository-name=Portfolio-3.0&env=NEXT_PUBLIC_GITHUB_TOKEN&envDescription=Required)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (npm will be installed with Node.js)
- [Git](https://git-scm.com/)

## Clone the Repository

> [!NOTE]  
> _This project uses pnpm to install dependencies and run scripts_  
> _If you don't have pnpm installed, delete the `pnpm-lock.yaml` file and use `npm` or `yarn` instead_

```
git clone https://github.com/AntonyJudeShaman/portfolio-3.0.git
cd portfolio-3.0
```

## Install Dependencies

For main portfolio

```
pnpm i
```

For blog

```
cd blog
pnpm i
```

## Set Up Environment Variables

Copy the `.env.example` file to `.env.local` and update the values as needed

```
cp .env.example .env.local
```

> [!NOTE]
> Get your Github personal access token from [here](https://github.com/settings/tokens/new) and add it to the `.env.local` file. Select the > **public_repo** under the `repo` scope to access your repositories.

> [!IMPORTANT]  
> _Github personal access token is needed to display your project repositories in the projects page_

## Run the Application

For main portfolio

```
pnpm dev
```

For blog

```
cd blog
pnpm dev
```

### **Visit http://localhost:3000 in your web browser to view the portfolio.**

## Project Structure

## Root Directory

- 📁 **Blog**: Contains the blog website code. It is a separate Next.js project,it can be run independently and hosted on Vercel.
- 📁 **app**: Main application code
  - 📁 **contact**: Contact-related components and pages
  - 📁 **projects**: Project-related components and pages
- 📁 **components**: Reusable components
  - 📁 **ui**: UI-specific components
- 📁 **config**: Configuration files
- 📁 **hooks**: Custom hooks
- 📁 **public**: Public assets
  - 📁 **images**: Image assets
  - 📁 **fonts**: Font assets
- 📁 **styles**: Stylesheets
  - 📄 **globals.css**: Global styles
- 📁 **types**: TypeScript type definitions
- 📁 **util**: Utility functions

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAntonyJudeShaman%2FPortfolio-3.0&project-name=Portfolio&repository-name=Portfolio-3.0&env=NEXT_PUBLIC_GITHUB_TOKEN&envDescription=Required)

This project is deployed on <a href="https://vercel.com">**Vercel**</a>

## Issues and Contributions

If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

_*Happy coding!*_
