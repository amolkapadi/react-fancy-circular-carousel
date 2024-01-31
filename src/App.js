import "./App.css";
import "react-fancy-circular-carousel/FancyCarousel.css";
import FancyCarousel from "react-fancy-circular-carousel";
import React, {useState} from 'react'
import image1 from "./assets/car1.avif";
import image2 from "./assets/car2.jpg";
import image3 from "./assets/car3.avif";
import image4 from "./assets/car4.jpg";
import image5 from "./assets/car5.jpg";
import image6 from "./assets/car6.webp";

function App() {
  const images = [image1, image2, image3, image4, image5, image6];
  const [focusElement, setFocusElement] = useState(0);

  const info = [
  '1.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  '2.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  '3.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  '4.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  '5.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  '6.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

];
  return (
    <div className="carousel">
      <div className="main-div">
      <FancyCarousel images={images} 
      carouselRadius={320}
      peripheralImageRadius={100}
      centralImageRadius={120}
      focusElementStyling={{border: '2px solid #ba4949'}}
      autoRotateTime={3}
      borderWidth={4}
      borderHexColor={'1c364f'}
      setFocusElement={setFocusElement}
      />
      </div>
      <div className="info-box-wrapper">
        <p><span>Latest Car's</span> {info[focusElement]} </p>
      </div>
    </div>
  );
}

export default App;
