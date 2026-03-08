// index.jsx

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import CaseStudy from './pages/CaseStudy.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="profile" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="casestudy" element={<CaseStudy />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
