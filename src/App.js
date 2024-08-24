import "./App.css"; 
import Navbar from "./components/Navbar"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import GooglePay from "./components/GooglePay";
import PhonePay from "./components/PhonePay";
import PayTm from "./components/PayTm";
function App() {
  const data = {
    title: "Google Pay",
    phonePay: "Phone Pay",
    PayTm: "PayTm",
  };

  return (
    <Router>
      <Navbar data={data} />
      <div className="container my-3" style={{ width: "100vw" }}>
        <Routes>
          <Route path="/phonePay" element={<PhonePay />} />
          <Route path="/PayTm" element={<PayTm />} />
          <Route
            path="/"
            element={<GooglePay heading="Enter the text to analyze below" />}
          />
        </Routes>
        </div>
    </Router>
    // <Router>
    //   <Navbar data={data} />
    //   <div className="container my-3" style={{ width: "100vw" }}>
    //     <Routes>
    //       <Route path="/about" element={<About />} />
    //       <Route
    //         path="/"
    //         element={<TextForm heading="Enter the text to analyze below" />}
    //       />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
