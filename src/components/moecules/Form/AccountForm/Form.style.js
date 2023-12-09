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

export const FormContactLabel = styled.label`
  color: #151515;
  font-weight: normal;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  &.in-valid {
    color: #d01c27;
  }
`;

export const FormContactInput = styled.input`
  font-size: 1.125rem;
  padding: 0.6rem 0.3rem;
  margin-bottom: 0.5rem;
  &.in-valid {
    border: 1px solid #d01c27;
  }
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

export const FormGenderSelectContainer = styled.div`
  display: flex;
  border: 1px solid #000000;
  border-radius: 35px;
  font-size: 1rem;
  overflow: hidden;
  margin-bottom: 1.3rem;
`;

export const FormGenderSelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0.8rem 0;
  background-color: #dce2fd;
  color: #ffffff;
  &.selected {
    background-color: #ffffff;
    color: #000000;
    border-radius: 35px;
  }
  cursor: pointer;
`;

export const FormCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #989595;
`;
export const FormCheckbox = styled.input`
  width: 0.8rem;
`;

export const FormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;
