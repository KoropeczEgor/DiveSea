import styled from "styled-components";

const ButtonPrimary = styled.input`
  padding: 1rem 1.54rem;
  border-radius: 1rem;
  background: #141416;
  cursor: pointer;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.51rem; /* 150% */
  text-transform: uppercase;
`;

const Button = () => {
  return (
    <ButtonPrimary
      className="button-primary"
      type="button"
      value="Connect Wallet"
    />
  );
};

export default Button;
