import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4.2rem 0;
  & h1,
  & p {
    font-size: 1.5rem;
  }
  & h1 {
    margin-bottom: 1rem;
    font-family: serif;
  }
  & h2 {
    font-family: "Hurricane", cursive;
    font-weight: 400;
    font-size: 3.1rem;
    margin-bottom: 1.7rem;
  }
`;

export const Main = styled.main``;

export const Card = styled.section`
  position: relative;
  width: 100%;
  height: 330px;
  &.red {
    background: linear-gradient(193deg, rgba(242, 76, 54, 1) 0%, rgba(187, 37, 40, 1) 80%);
  }
  &.blue {
    background: linear-gradient(193deg, rgba(54, 197, 242, 1) 0%, rgba(54, 152, 242, 1) 80%);
  }
  &.green {
    background: linear-gradient(193deg, rgba(123, 175, 98, 1) 0%, rgba(55, 170, 111, 1) 80%);
  }
  border-radius: 25px;
  color: #ffffff;
  padding: 1.5rem 0.8rem;
  margin-bottom: 1rem;
  & h2 {
    font-size: 1.65rem;
    margin-bottom: 1rem;
  }
  & p {
    font-weight: lighter;
    font-size: 18px;
  }
  &.red {
    img {
      position: absolute;
      width: 100%;
      height: 500px;
      object-fit: contain;
      top: -70px;
    }
  }

  &.blue {
    img {
      position: absolute;
      width: 100%;
      height: 500px;
      object-fit: contain;
      top: -20px;
    }
  }
  &.green {
    img {
      position: absolute;
      width: 100%;
      height: 250px;
      object-fit: contain;
      right: -60px;
      bottom: -30px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem 0;
`;

export const Button = styled.button`
  width: 199px;
  padding: 1.3rem 1rem;
  border-radius: 0.625rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-size: 1.4rem;
  border: none;
  ${(props) => props.bgColor && `background-color: ${props.bgColor};`}
  cursor: pointer;
`;
