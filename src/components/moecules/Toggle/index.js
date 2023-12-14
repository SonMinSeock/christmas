import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  border: 1px solid #000000;
  border-radius: 35px;
  font-size: 1rem;
  overflow: hidden;
  margin-bottom: 1.3rem;
`;

export const ToggleItem = styled.div`
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
