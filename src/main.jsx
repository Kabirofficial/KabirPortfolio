import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const HeroPage = lazy(() => import('./pages/HeroPage'));
const IdentityPage = lazy(() => import('./pages/IdentityPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const TechStackPage = lazy(() => import('./pages/TechStackPage'));
const JourneyPage = lazy(() => import('./pages/JourneyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage.jsx'));
const ErrorPage = lazy(() => import('./pages/ErrorPage.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      { index: true, element: <HeroPage /> },
      { path: "identity", element: <IdentityPage /> },
      { path: "research", element: <ResearchPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "certifications", element: <CertificationsPage /> },
      { path: "stack", element: <TechStackPage /> },
      { path: "journey", element: <JourneyPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <ErrorPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
