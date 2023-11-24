import React from "react";
import Layout from "../components/Layout/Layout";

import Promo from "../components/Promo";
import SliderNFT from "../components/Slider/SliderNFT";

const HomePage = () => {
  return (
    <Layout>
      <Promo />
      <SliderNFT />
    </Layout>
  );
};

export default HomePage;
