import styled from "styled-components";

import Slider from "../SliderSwiper";

const Wrapper = styled.div`
  background: #f1f1f1;
  height: 54.56rem;
  padding: 4.37rem 0 0 0;
`;
const Title = styled.div`
  color: #c5c5c5;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins, sans-serif;
  font-size: 2.81rem;
  font-weight: 600;
  line-height: 1.68rem;
  text-align: center;
`;
const SliderNFT = () => {
  return (
    <Wrapper>
      <Title>Weekly - Top NFT</Title>
      <Slider />
    </Wrapper>
  );
};

export default SliderNFT;
