import styled from "styled-components";

export const Input = styled.input`
  font-size: 1.125rem;
  padding: 0.6rem 0.3rem;
  margin-bottom: ${(props) => (props.marginSize ? props.marginSize : 0)};
  &.in-valid {
    border: 1px solid #d01c27;
  }
`;
