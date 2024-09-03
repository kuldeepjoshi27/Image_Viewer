import Header from "./Components/Header";
import Images from "./Components/Images";
import InputImage from "./Components/InputImage";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const handleNewImages = (newImage) => {
    setImages(newImage);
  };

  useEffect(() => {
    console.log("Updated images:", images);
  }, [images]);
  return (
    <>
      <div className="app-container">
        <Header></Header>
        <InputImage onImageUpload={handleNewImages}></InputImage>
        <Images images={images}></Images>
      </div>
    </>
  );
}

export default App;
