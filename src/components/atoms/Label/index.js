import styled from "styled-components";

export const Label = styled.label`
  color: #151515;
  font-weight: normal;
  font-size: 0.8rem;
  margin-bottom: ${(props) => (props.marginSize ? props.marginSize : 0)};
  &.in-valid {
    color: #d01c27;
  }
`;
