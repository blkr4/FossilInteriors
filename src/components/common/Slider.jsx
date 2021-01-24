import React, { useState, useEffect, useRef } from "react";
import styled  from "styled-components";

const SliderSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const ImageSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const ImageSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;

const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.3;
`;

const InfoContainer = styled.div`
  position: relative;
    display: flex;
    padding:8px;
    height:50%;
  flex-direction: column;
  max-width: 1600px;
  width: 50%;
  color: #fff;
  background: rgba( 228, 215, 215, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 3.2px );
  -webkit-backdrop-filter: blur( 3.2px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media screen and (max-width:768px){
    width: 70%;
  }
`
const SlideContent = styled.div`
  margin: auto;
  width: 90%;
  
  h1 {
    font-size:clamp(3rem, 8vw, 6rem);
    font-family:Julius Sans One, sans-serif;
    text-transform: capitalize;
    text-align: center;
    font-weight: 300;
  }
  p{
    margin-top:8px;
    font-size: clamp(1rem, 8vw, 1.25rem);
    font-family:Julius Sans One, sans-serif;
    text-transform: capitalize;
    text-align: center;
    font-weight: 300;
  }
  @media screen and (max-width:768px){
    width: 100%;
    z-index:-1;
  }
`;

const Slider = ({ sliderData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeOut = useRef(null);
  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrentSlide((current) =>
  //       current === sliderData.length - 1 ? 0 : current + 1
  //     );
  //   };
  //   timeOut.current = setTimeout(nextSlide, 5000);
  //   return function () {
  //     if (timeOut.current) {
  //       clearTimeout(timeOut.current);
  //     }
  //   };
  // }, [currentSlide, sliderData.length]);

    return (
    <SliderSection>
      {sliderData.map((slide, idx) => {
        return idx === currentSlide && (
            <ImageSlide key={idx}>
            <ImageSlider>
              <SlideImage src={slide.image} alt={slide.alt} />
              <InfoContainer>
              <SlideContent>
                <h1>{slide.title}</h1>
                <p>{slide.label}</p>
              </SlideContent>
              </InfoContainer>
            </ImageSlider>
          </ImageSlide>
        );
      })}

    </SliderSection>
  );
};

export default Slider;
