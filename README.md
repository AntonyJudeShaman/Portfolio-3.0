<h1 align="center">
  Portfolio - v3.0
</h1>
<p align="center">
  Built with Nextjs and hosted on Vercel.
</p>
Welcome to my portfolio website! This repository contains the code for my personal portfolio.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (npm will be installed with Node.js)
- [Git](https://git-scm.com/)

## Clone the Repository

```
git clone https://github.com/AntonyJudeShaman/portfolioV3.0.git
cd portfolioV3.0
```

## Install Dependencies

`npm i` or ```pnpm i``` or ```yarn```

## Set Up Environment Variables
Copy the `.env.example` file to `.env.local` and update the values as needed

```
cp .env.example .env.local
```

## Run the Application

```
npm run dev
```

or 

```
pnpm run dev
```

or 

```
yarn run dev
```


### **Visit http://localhost:3000 in your web browser to view the portfolio.**  


## Project Structure

## Root Directory

- 📁 **.contentlayer**: Content layer configuration and data
- 📁 **app**: Main application code
  - 📁 **blogs**: Blog-related components and pages
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
This project is deployed on <a href="https://vercel.com">**Vercel**</a>

## Issues and Contributions
If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

_*Happy coding!*_
