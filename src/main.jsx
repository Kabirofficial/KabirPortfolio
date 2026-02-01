import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Loading from "./components/Loading.jsx";

const AboutPage = React.lazy(() => import("./pages/AboutPage.jsx"));
const CertificationsPage = React.lazy(() => import("./pages/CertificationsPage.jsx"));
const ContactPage = React.lazy(() => import("./pages/ContactPage.jsx"));
const EducationPage = React.lazy(() => import("./pages/EducationPage.jsx"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage.jsx"));
const ExperiencePage = React.lazy(() => import("./pages/ExperiencePage.jsx"));
const HomePage = React.lazy(() => import("./pages/HomePage.jsx"));
const ProjectDetailPage = React.lazy(() => import("./pages/ProjectDetailPage.jsx"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage.jsx"));
const SkillsPage = React.lazy(() => import("./pages/SkillsPage.jsx"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <React.Suspense fallback={<Loading />}>
        <ErrorPage />
      </React.Suspense>
    ),
    children: [
      {
        path: "*",
        element: (
          <React.Suspense fallback={<Loading />}>
            <NotFoundPage />
          </React.Suspense>
        ),
      },
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loading />}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <React.Suspense fallback={<Loading />}>
            <AboutPage />
          </React.Suspense>
        ),
      },
      {
        path: "experience",
        element: (
          <React.Suspense fallback={<Loading />}>
            <ExperiencePage />
          </React.Suspense>
        ),
      },
      {
        path: "education",
        element: (
          <React.Suspense fallback={<Loading />}>
            <EducationPage />
          </React.Suspense>
        ),
      },
      {
        path: "skills",
        element: (
          <React.Suspense fallback={<Loading />}>
            <SkillsPage />
          </React.Suspense>
        ),
      },
      {
        path: "certifications",
        element: (
          <React.Suspense fallback={<Loading />}>
            <CertificationsPage />
          </React.Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <React.Suspense fallback={<Loading />}>
            <ProjectsPage />
          </React.Suspense>
        ),
      },
      {
        path: "projects/:projectId",
        element: (
          <React.Suspense fallback={<Loading />}>
            <ProjectDetailPage />
          </React.Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <React.Suspense fallback={<Loading />}>
            <ContactPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
