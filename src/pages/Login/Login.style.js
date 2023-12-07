import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  /* padding-top: 4.2rem; */
  /* padding-bottom: 0.8rem; */
  grid-area: header;
  & h1 {
    font-family: "Hurricane", cursive;
    font-weight: 400;
    font-size: 3.1rem;
  }
`;

export const Main = styled.main`
  grid-area: main;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Footer = styled.footer`
  grid-area: footer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
`;
