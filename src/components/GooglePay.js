import React, { useState } from "react";
import axios from "axios";
import imageData from "../../src/assets/images/qr-code-print5-293x300.png";
import logo from "../../src/assets/images/Google_Pay_Logo.svg";

export default function GooglePay() {
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Define the data to be sent
    const data = {
      number: amount,
      paymentMethod: "gp",
    };
    console.log(data);
   
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/google-pay`,
        data
      );
      // Handle success
      if (response.data.data !== null) {
        setImage(process.env.REACT_APP_BACKEND_URL + response.data.data); // Assuming the response data is an object
      }
    } catch (err) {
      console.log(err);
      // Handle error
    }
  };

  const style =
    image === ""
      ? {
          marginTop: "25px",
          width: "300px",
          height: "300px",
        }
      : {
          marginTop: "25px",
          width: "300px",
          height: "300px",
          boxShadow: "10px 10px 20px rgba(0, 0.5, 0.6, 0.5)",
        };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{ marginTop: "20px", height: "40px" }}
          />

          <img
            src={image === "" ? imageData : image}
            alt="QR Code"
            style={style}
          />
          <div className="mb-3 mt-4">
            <h1 htmlFor="number">
              <strong>Add Amount</strong>
            </h1>
          </div>

          <div className="input-group mb-3 col-4">
            <span className="input-group-text">₹</span>
            <input
              type="number"
              className="form-control"
              id="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-outline-primary" type="submit">
            Generate QR Code
          </button>
        </div>
      </form>
    </div>
  );
}
