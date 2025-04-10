import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { MainNavigation } from './components/MainNavigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Projects from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path:'/home',
        element:<HomePage/>
      },
      {
        path: '/about',
        element:<AboutPage/>
      },
      {
        path: '/projects',
        element:<Projects/>
      },
      {
        path: '/contact',
        element:<ContactPage/>
      },
      {
        path:'/service',
        element:<ServicesPage/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
