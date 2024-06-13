import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
export default function App() {
  return (
    <div>
      hello
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<AppLayout />}>
            <Route path="cities" element={<p>List of cities</p>}></Route>
            <Route path="countries" element={<p>coutries</p>}></Route>
            <Route path="form" element={<p>form</p>}></Route>
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
