import styled from "styled-components";

export const Layout = styled.div`
  height: 100%;
  font-weight: bold;
  padding: 0 1.5rem;
  max-width: 380px;
  margin: 0 auto;
`;

export const LoginLayout = styled(Layout)`
  padding: 0rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;
