import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { Analytics } from "./pages/analytics";
import { Products } from "./pages/products";
import { Showroom } from "./pages/showroom";
import { Manage } from "./pages/manage";
import { Signup } from "./pages/signup";
import { Subscription } from "./pages/subscription";
import { Payment } from "./pages/payment";
// import { Credit } from "./pages/credit";
import { Account } from "./pages/account";
import { FashionLab } from "./pages/3d-fashion-lab";
import { Teams } from "./pages/teams";
import EditorEngine from "./EditorEngine";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/3d-fashion-lab" element={<FashionLab />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/editor" element={<EditorEngine />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/payment" element={<Payment />} /> 
          {/* <Route path="/credit" element={<Credit />} /> */}
          <Route path="/account" element={<Account />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
