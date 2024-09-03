/* eslint-disable react/prop-types */

import { useState } from "react";

useState;

const InputImage = ({ onImageUpload }) => {
  const [file, setFile] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (e) => {
    console.log("Submit clicked");

    e.preventDefault();
    if (!file) {
      alert("Please Select a File");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch("http://192.168.0.134:4200/check_face", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Received images:", result.matching_images);

      if (Array.isArray(result.matching_images)) {
        onImageUpload(result.matching_images);
      } else {
        console.error("Expected an array but got:", result.matching_images);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="input-image">
          <input onChange={handleFileChange} type="file" accept="image/*" />
          <button className="search-button">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default InputImage;
