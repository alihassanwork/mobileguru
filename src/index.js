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
  MobileListView,
  VideoReview,
  News,
  Reviews,
  ContactUs,
} from "screens";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="/phoneDescription" element={<SmartPhoneDetailDesc />} />
          <Route path="/PhoneDetails" element={<UsedSmartPhoneDetails />} />
          <Route path="/UploadAd" element={<UsedMobileUploadAdDetails />} />
          <Route path="/PhoneSpec" element={<SmartPhoneDetailSpec />} />
          <Route path="/MobileList" element={<MobileListView />} />
          <Route path="/VideoReview" element={<VideoReview />} />
          <Route path="/News" element={<News />} />
          <Route path="/Review" element={<Reviews />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
