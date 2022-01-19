import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomeScreen,
  SmartPhoneDetailDesc,
  UsedSmartPhoneDetails,
  UsedMobileUploadAdDetails,
  SmartPhoneDetailSpec,
} from "screens";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="/description" element={<SmartPhoneDetailDesc />} />
          <Route path="/PhoneDetails" element={<UsedSmartPhoneDetails />} />
          <Route path="/UploadAd" element={<UsedMobileUploadAdDetails />} />
          <Route path="/PhoneSpec" element={<SmartPhoneDetailSpec />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
