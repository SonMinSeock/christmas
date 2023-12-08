import React from "react";
import * as LoginS from "./Login.style";
import * as TemplateS from "../../components/templates/template.style";
import * as SocialBtnS from "../../components/atoms/buttons/socialBtn";
import HouseImage from "../../assets/house/house.png";
import KakaoLogoImage from "../../assets/social_logo/kakao-logo.png";
import { onNavigation } from "../../controller/navigate";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <TemplateS.LoginLayout>
      <LoginS.Header>
        <h1>Christmas in Card</h1>
      </LoginS.Header>
      <LoginS.Main>
        <img src={HouseImage} alt="로그인 화면의 크리스마스 집 이미지" />
      </LoginS.Main>
      <LoginS.Footer>
        <SocialBtnS.KakaoLoginBtn onClick={() => onNavigation(navigate, "/account")}>
          <img src={KakaoLogoImage} alt="카카오 로고 이미지" />
          <span>카카오톡으로 로그인</span>
        </SocialBtnS.KakaoLoginBtn>
      </LoginS.Footer>
    </TemplateS.LoginLayout>
  );
}

export default Login;
