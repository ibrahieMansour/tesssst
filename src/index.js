import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import HomePage from './Componants/HomePage';
import AboutPage from './Componants/AboutPage';
import WorkPage from './Componants/WorkPage';
import ContactPag from "./Componants/ContactPage";
import Pricing from "./Componants/Pricing";
import Navbar1 from "./Componants/Navbar1";
import PageFooter from "./Componants/PageFooter";
import ProductPage from "./Componants/ProductPage";
import CardPage from "./Componants/ConectBage/CardPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Componants/css/main.css"

const router = createBrowserRouter([
  { path: "/", element: (<HomePage />), },
  { path: "About", element: <AboutPage /> },
  { path: "Work", element: (<WorkPage />), },
  { path: "Contact", element: (<ContactPag />), },
  { path: "Pricing", element: (<><Navbar1 /><Pricing /><PageFooter /></>), },
  { path: "Product", element: (<ProductPage />), },
  { path: "CartPage", element: (<CardPage />), }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
