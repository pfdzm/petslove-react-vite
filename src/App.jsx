/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import SubscriptionForm from "./components/SubscriptionForm";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
function App() {
  return (
    <>
      <div>
        <h1>Yen's project with Vite + React</h1>
        <Header />
        <Products />
        <SubscriptionForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
