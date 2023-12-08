import React from "react";
import cardChristmasTreeImage from "../../assets/trees/card-cristmas-tree.png";
import letterImage from "../../assets/letter/letter.png";
import socksImage from "../../assets/socks/socks.png";
import { FiShare } from "react-icons/fi";
import * as TemplateS from "../../components/templates/template.style";
import * as IntroS from "./Intro.style";
import { useNavigate } from "react-router-dom";
import { onNavigation } from "../../controller/navigate";

function Intro() {
  const navigate = useNavigate();

  return (
    <TemplateS.Layout>
      <IntroS.Header>
        <h1>D-1</h1>
        <h2>Christmas in Card</h2>
        <p>
          이번 크리스마스에 <br />
          함께 할 친구를 소개해드려요
        </p>
      </IntroS.Header>
      <IntroS.Main>
        <IntroS.Card className="red">
          <h2>캐릭터를 만들어요</h2>
          <p>
            나만의 크리스마스
            <br /> 캐릭터를 만들고
            <br /> 새로운 친구들과
            <br /> 이야기를 나눠봐요
          </p>
          <img src={cardChristmasTreeImage} alt="애플리케이션 소개 카드 중 크리스마스 트리 이미지" />
        </IntroS.Card>
        <IntroS.Card className="blue">
          <h2>마음을 나눠보세요</h2>
          <p>
            2023년을 마무리하며 친구들에게
            <br /> 크리스마스 카드를 통해 마음을 나눠봐요
            <br /> 25일에 전달해
            <br />
            드려요
          </p>
          <img src={letterImage} alt="애플리케이션 소개 카드 중 크리스마스 트리 이미지" />
        </IntroS.Card>
        <IntroS.Card className="green">
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
        </IntroS.Card>
      </IntroS.Main>
      <IntroS.Footer>
        <IntroS.Button bgColor="#FF5D56" onClick={() => onNavigation(navigate, "/login")}>
          캐릭터 받기
        </IntroS.Button>
        <IntroS.Button bgColor="#BFBFBF">
          <FiShare />
          이벤트 공유
        </IntroS.Button>
      </IntroS.Footer>
    </TemplateS.Layout>
  );
}

export default Intro;
