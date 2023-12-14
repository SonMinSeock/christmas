import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "form-main"
    "form-footer";
  height: 100%;
`;

export const FormMain = styled.div`
  grid-area: form-main;
`;

export const FormFooter = styled.div`
  grid-area: form-footer;
  align-self: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const FormContactParagraph = styled.p`
  font-size: 0.75rem;
  font-weight: normal;
  color: #74818e;
  margin-bottom: 1.3rem;
`;

export const FormHighlightRedSpan = styled.span`
  color: #d01c27;
`;
