import styled from "styled-components";

export const Button = styled.button`
  color: #ffffff;
  font-size: 1.4rem;
  border: none;
  cursor: pointer;
`;

export const MediumButton = styled(Button)`
  width: 199px;
  padding: 1.3rem 1rem;
  border-radius: 0.625rem;
  margin-bottom: ${(props) => (props.marginSize ? props.marginSize : 0)};
  ${(props) => props.bgColor && `background-color: ${props.bgColor};`}
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  background-color: #007aff;
  padding: 0.6rem 0.5rem;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
`;
