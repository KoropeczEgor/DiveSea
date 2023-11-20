import styled from "styled-components";

import Button from "../ButtonPrimary/ButtonPrimary";

import Arrow from "../assets/icons/promo/Arrow";
import DotOrnament from "../assets/icons/promo/DotOrnament";
import Promo1 from "../assets/icons/promo/promo1.png";
import Promo2 from "../assets/icons/promo/promo2.png";

const PromoMain = styled.main`
  padding: 7.87rem 0 8.93rem 0;
`;
const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;
const MainDiscover = styled.div`
  hr {
    display: inline-block;
    text-align: left;
    width: 12.8rem;
  }
`;
const MainDiscoverTitle = styled.div`
  width: 35rem;
  color: #141416;
  font-family: Poppins, sans-serif;
  font-size: 75px;
  font-weight: 600;
  line-height: 120%;
  text-transform: capitalize;
`;
const Title = styled.div`
  width: 7.37rem;
  color: #141416;
  font-family: Public Sans, sans-serif;
  font-size: 2.31rem;
  font-weight: 600;
  line-height: 2.87rem;
`;
const Subtitle = styled.div`
  color: #848586;
  font-family: Inter, sans-serif;
  font-size: 0.76rem;
  font-weight: 500;
  line-height: 1.14rem;
`;

const MainDiscoverStatistics = styled.div`
  display: flex;
  margin-top: 5.12rem;
`;
const MainDiscoverSubtitle = styled.div`
  margin-top: 1rem;
  width: 30rem;
  color: #676767;
  text-align: justify;
  font-family: Inter, sans-serif;
  font-size: 1.12rem;
  font-weight: 400;
  line-height: 1.75rem;
  span {
    color: #141416;
    font-family: Inter, sans-serif;
    font-size: 1.12rem;
    font-weight: 600;
    line-height: 1.75rem;
    margin-left: 0.3rem;
  }
`;
const MainDiscoverButton = styled.div`
  margin-top: 2.81rem;
`;
const Statistics = styled.div`
  margin-right: 3.87rem;
`;

const MainSlider = styled.div`
  position: relative;
  .Promo1 {
    position: absolute;
    top: 24%;
  }
  .Promo2 {
    position: absolute;
    top: 59%;
    left: 27rem;
  }
  .Arrow {
    position: absolute;
    top: 38%;
    left: 25rem;
  }
  .DotOrnament {
    position: absolute;
    top: 31%;
    left: 40rem;
  }
`;

const Promo = () => {
  return (
    <PromoMain>
      <Container>
        <MainDiscover>
          <hr />
          <MainDiscoverTitle>Discover And Create NFTs</MainDiscoverTitle>
          <MainDiscoverSubtitle>
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a<span>$20 bonus</span>.
          </MainDiscoverSubtitle>
          <MainDiscoverButton>
            <Button />
            <Button />
          </MainDiscoverButton>
          <MainDiscoverStatistics>
            <Statistics>
              <Title>430K+</Title>
              <Subtitle>Art Works</Subtitle>
            </Statistics>
            <Statistics>
              <Title>159K+</Title>
              <Subtitle>Creators</Subtitle>
            </Statistics>
            <Statistics>
              <Title>87K+</Title>
              <Subtitle>Collections</Subtitle>
            </Statistics>
          </MainDiscoverStatistics>
        </MainDiscover>
        <MainSlider>
          <img src={Promo1} alt="Promo1" className="Promo1" />
          <img src={Promo2} alt="Promo2" className="Promo2" />
          <Arrow />
          <DotOrnament />
        </MainSlider>
      </Container>
    </PromoMain>
  );
};

export default Promo;
