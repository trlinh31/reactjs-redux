import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";

const RoutesComponent = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </Layout>
  </Router>
);

export default RoutesComponent;
