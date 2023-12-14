import styled from "styled-components";

export const Card = styled.section`
  position: relative;
  width: 100%;
  height: 330px;
  &.red {
    background: linear-gradient(193deg, rgba(242, 76, 54, 1) 0%, rgba(187, 37, 40, 1) 80%);
  }
  &.blue {
    background: linear-gradient(193deg, rgba(54, 197, 242, 1) 0%, rgba(54, 152, 242, 1) 80%);
  }
  &.green {
    background: linear-gradient(193deg, rgba(123, 175, 98, 1) 0%, rgba(55, 170, 111, 1) 80%);
  }
  border-radius: 25px;
  color: #ffffff;
  padding: 1.5rem 0.8rem;
  margin-bottom: 1rem;
  overflow: hidden;
  & h2 {
    font-size: 1.65rem;
    margin-bottom: 1rem;
  }
  & p {
    font-weight: lighter;
    font-size: 18px;
  }
  &.red {
    img {
      position: absolute;
      width: 100%;
      height: 500px;
      object-fit: contain;
      top: -70px;
    }
  }

  &.blue {
    img {
      position: absolute;
      width: 100%;
      height: 500px;
      object-fit: contain;
      top: -20px;
    }
  }
  &.green {
    img {
      position: absolute;
      width: 100%;
      height: 260px;
      object-fit: contain;
      right: -73px;
      bottom: -30px;
    }
  }
`;
