// index.jsx

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './index.css';
import Layout from './Layout.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} /> 
      <Route path="profile" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
