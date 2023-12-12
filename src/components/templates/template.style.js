import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  height: 100%;
  font-weight: bold;
  padding: 0 1.5rem;
  max-width: 380px;
  margin: 0 auto;
  /* padding: 0rem; */
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

export const LoginLayout = styled(Layout)`
  padding: 0rem;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

export const FormLayout = styled(Layout)`
  grid-template-rows: 0.3fr 1fr;
  grid-template-areas:
    "header"
    "main";
`;
