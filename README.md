# Kabir's Portfolio Website

[![Vercel Deployment Status](https://img.shields.io/github/deployments/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/production?label=vercel&logo=vercel)](https://kabir-portfolio-pink.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to the source code repository for my personal portfolio website! This site showcases my skills as a Full-Stack Developer, highlights my projects, and provides easy ways to connect with me. It's built with React, Vite, Tailwind CSS, and Framer Motion, focusing on a clean aesthetic, responsiveness, and smooth user experience.

**Live Site:** [**https://kabir-portfolio-pink.vercel.app/**](https://kabir-portfolio-pink.vercel.app/)

## ✨ Features

*   **Engaging Landing Page:** An animated introduction to the portfolio.
*   **Homepage:** Quick overview and navigation hub.
*   **About Page:** My background, journey into tech, core skills, and personal interests.
*   **Projects Page:** A filterable grid showcasing selected projects with descriptions, technologies used, and links to live demos and source code.
*   **Services Page:** Outlines the development services I offer.
*   **Contact Page:** Direct email link and connections to my LinkedIn, GitHub, and Instagram profiles.
*   **Fully Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile devices.
*   **Smooth Animations:** Built with Framer Motion for engaging page transitions and interactive element animations.
*   **Downloadable Resume:** A button to easily download my latest CV in PDF format.
*   **Mobile Hamburger Menu:** Intuitive navigation for smaller screens.

## 🚀 Tech Stack

*   **Framework:** [React](https://reactjs.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Deployment:** [Vercel](https://vercel.com/)

## 🛠️ Getting Started

To get a local copy up and running for development purposes, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later recommended): [Download Node.js](https://nodejs.org/)
*   npm, yarn, or pnpm package manager

## 🔧 Configuration

No environment variables (`.env` file) are required for the base functionality of this portfolio.

## 📝 Project Data & Content Customization

To personalize this portfolio with your own information, you'll need to update the following:

*   **Project Details:** Modify the `projectsData` array located within `src/pages/ProjectsPage.jsx`. Update titles, descriptions, technologies, image URLs, live demo URLs, and repository URLs.
*   **Resume PDF:** Replace the file `/public/Kabir-CV.pdf` with your own resume file. Make sure the filename matches the `pdfPath` prop passed to the `DownloadResumeButton` component (currently set in `src/components/Navbar.jsx` and potentially other places).
*   **Images:** Place your project screenshots, profile picture (if used), and any other static images in the `/public/images/` directory and update the paths used in the components accordingly.
*   **Text Content:** Edit the text within the page components (`src/pages/HomePage.jsx`, `src/pages/AboutPage.jsx`, `src/pages/ServicesPage.jsx`, `src/pages/ContactPage.jsx`) to reflect your personal details, bio, service descriptions, etc.
*   **Contact Details:** Update the `contactDetails` object in `src/pages/ContactPage.jsx` with your correct email address and social media profile URLs (LinkedIn, Instagram, GitHub).

## 🚀 Deployment

This site is automatically deployed using [Vercel](https://vercel.com/). Any push or merge to the `main` branch will trigger a new deployment.

**Live Site:** [**https://kabir-portfolio-pink.vercel.app/**](https://kabir-portfolio-pink.vercel.app/)

## 🤝 Contributing

This is my personal portfolio, so contributions are generally not sought. However, if you find a bug or have a suggestion for improvement, please feel free to open an issue in the repository.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
*(Make sure you have a LICENSE.md file in your repository root)*

## 📫 Contact

Kabir - thayanikabir.business@gmail.com
