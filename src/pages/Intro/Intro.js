import React from "react";
import styled from "styled-components";
import cardChristmasTreeImage from "../../assets/trees/card-cristmas-tree.png";
import letterImage from "../../assets/letter/letter.png";
import socksImage from "../../assets/socks/socks.png";
import { FiShare } from "react-icons/fi";

const Layout = styled.div`
  height: 100%;
  font-weight: bold;
  padding: 0 1.5rem;
  max-width: 380px;

  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4.2rem 0;
  & h1,
  & p {
    font-size: 1.5rem;
  }
  & h1 {
    margin-bottom: 1rem;
    font-family: serif;
  }
  & h2 {
    font-family: "Hurricane", cursive;
    font-weight: 400;
    font-size: 3.1rem;
    margin-bottom: 1.7rem;
  }
`;

const Main = styled.main``;

const Card = styled.section`
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
      height: 250px;
      object-fit: contain;
      right: -60px;
      bottom: -30px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem 0;
`;

const Button = styled.button`
  width: 199px;
  padding: 1.3rem 1rem;
  border-radius: 0.625rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-size: 1.4rem;
  border: none;
  ${(props) => props.bgColor && `background-color: ${props.bgColor};`}
  cursor: pointer;
`;
function Intro() {
  return (
    <Layout>
      <Header>
        <h1>D-1</h1>
        <h2>Christmas in Card</h2>
        <p>
          이번 크리스마스에 <br />
          함께 할 친구를 소개해드려요
        </p>
      </Header>
      <Main>
        <Card className="red">
          <h2>캐릭터를 만들어요</h2>
          <p>
            나만의 크리스마스
            <br /> 캐릭터를 만들고
            <br /> 새로운 친구들과
            <br /> 이야기를 나눠봐요
          </p>
          <img src={cardChristmasTreeImage} alt="애플리케이션 소개 카드 중 크리스마스 트리 이미지" />
        </Card>
        <Card className="blue">
          <h2>마음을 나눠보세요</h2>
          <p>
            2023년을 마무리하며 친구들에게
            <br /> 크리스마스 카드를 통해 마음을 나눠봐요
            <br /> 25일에 전달해
            <br />
            드려요
          </p>
          <img src={letterImage} alt="애플리케이션 소개 카드 중 크리스마스 트리 이미지" />
        </Card>
        <Card className="green">
          <h2>선물도 함께 받아보세요</h2>
          <p>
            이번 크리스마스는
            <br />
            외롭지 않도록
            <br />
            새로운 친구들도
            <br />
            선물해 드려요
          </p>
          <img src={socksImage} alt="애플리케이션 소개 카드 중 크리스마스 트리 이미지" />
        </Card>
      </Main>
      <Footer>
        <Button bgColor="#FF5D56">캐릭터 받기</Button>
        <Button bgColor="#BFBFBF">
          <FiShare />
          이벤트 공유
        </Button>
      </Footer>
    </Layout>
  );
}

export default Intro;
