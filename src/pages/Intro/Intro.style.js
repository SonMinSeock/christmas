import styled from "styled-components";

export const Header = styled.header`
  grid-area: header;
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

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem 0;
`;
