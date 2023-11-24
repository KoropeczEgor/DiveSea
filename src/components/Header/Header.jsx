import { Link } from "react-router-dom";

import Logo from "../../assets/icons/logo";

import FormSearch from "../Forms";
import Button from "../ButtonPrimary";

import styled from "styled-components";
import { ListLinks } from "./Header.config";

const HeaderMain = styled.div`
  display: flex;
  margin-top: 3rem;
  .form__search {
    margin-right: 1.87rem;
  }
  .logo {
    margin-right: 3.56rem;
  }
  a {
    color: #606060;
    font-family: Inter, sans-serif;
    font-size: 1.11rem;
    font-weight: 500;
    line-height: 1.67rem;
    text-transform: uppercase;
    text-decoration: none;
    list-style: none;
    margin-right: 3.37rem;
    &:nth-child(5) {
      margin-right: 7.37rem;
    }
  }
`;

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderMain>
      <Container>
        <Logo />
        {ListLinks.map((item) => (
          <Link key={item.link} to={item.link} className="menu">
            {item.value}
          </Link>
        ))}
        <FormSearch />
        <Button value="Connect Wallet" />
      </Container>
    </HeaderMain>
  );
};

export default Header;
