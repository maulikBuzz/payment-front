import React, { useState } from "react";

export default function TextForm(prop) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    const newText = text.toUpperCase(text);
    setText(newText);
  };
  const handleUpClick1 = () => {
    const newText = text.toLowerCase(text);
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div class="mb-3">
          <h1>{prop.heading}</h1>
          <textarea
            class="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            placeholder="Enter text here"
          ></textarea>

          <button className="btn btn-primary m-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary m-3" onClick={handleUpClick1}>
            Convert to lowercase
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.trim().replace(/\s+/g, ' ').length} characters </p>
        <p>{(text.split(/\s/).filter((element)=>{return element.length!==0}).length* 0.008).toFixed(3)} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>{ }</p>
      </div>
    </>
  );
}
