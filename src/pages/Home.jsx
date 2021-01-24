import React from "react";
import Navbar from "../components/common/Navbar";
import Slider from "../components/common/Slider";
import { sliderData } from "../scripts/slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider sliderData={sliderData} />
    </>
  );
}

export default Home;
