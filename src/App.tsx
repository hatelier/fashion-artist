import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { Analytics } from "./pages/analytics";
import { Products } from "./pages/products";
import { Showroom } from "./pages/showroom";
import { Manage } from "./pages/manage";
import { Signup } from "./pages/signup";
import { ForgotPassword } from "./pages/forgot-password";
import { NewPassword } from "./pages/new-password";
import { ResetPassword } from "./pages/reset-password";
import { Subscription } from "./pages/subscription";
import { Payment } from "./pages/payment";
import { Credit } from "./pages/credit";
import { Account } from "./pages/account";
import { FashionLab } from "./pages/3d-fashion-lab";
import { Teams } from "./pages/teams";
import { Assets } from "./pages/asset-library";
import { AddShowroom } from "./pages/add-showroom";
import { PreviewProduct } from "./pages/preview";
import { Proceed } from "./pages/proceed";
import { Templates } from "./pages/templates";
import EditorEngine from "./EditorEngine";
// import { UploadPage } from "./pages/upload";
import { NewPasswordToken } from "./pages/new-password-token";
import PreviewEngine from "./EditorEngine/editorComponents/PreviewEngine";
import XRengine from "./EditorEngine/editorComponents/XRengine";

import {BillingHistory} from "./pages/billing-history"
import {CreditHistory} from "./pages/credit-history"
import { Notification } from "./pages/notification";
import { EditShowroom } from "./pages/edit-showroom";

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
          <Route path="/manage/:showroomId" element={<Manage />} />
          <Route path="/edit-showroom/:showroomID" element={<EditShowroom />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/editor/:id/:stage" element={<EditorEngine />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/account" element={<Account />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/add-showroom" element={<AddShowroom />} />
          <Route path="/password/reset" element={<NewPasswordToken />} />
          <Route path="/preview" element={<PreviewProduct />} />
          <Route path="/proceed" element={<Proceed />} />

          <Route path="/credit-history" element={<CreditHistory />} />
          <Route path="/billing-history" element={<BillingHistory />} />
          <Route path="/notification" element={<Notification />} />
          <Route
            path="/view/:userID/:projectID/:name"
            element={<PreviewEngine />}
          />
          <Route path="/xrtest" element={<XRengine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
