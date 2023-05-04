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
import EditorEngine from "./EditorEngine";

function App() {
  async function requestStorageQuota() {
    if (navigator.storage && navigator.storage.persist) {
      const isPersisted = await navigator.storage.persist();
      if (isPersisted) {
        console.log("Storage is persisted and won't be cleared by the browser");
      } else {
        console.log("Storage may be cleared by the browser");
      }
    } else {
      console.log("Storage persist API not supported");
    }
  }

  requestStorageQuota();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/editor" element={<EditorEngine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
