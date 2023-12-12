import React, { useState } from "react";
import ChraterImage from "../../../assets/charaters/character.png";
import styled from "styled-components";
import * as ButtonS from "../../atoms/buttons/FormBtn.style";

const ChraterImageSection = styled.section`
  & img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 25px;
  }
  margin-bottom: 3rem;
`;

const ColorList = styled.ol`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const ColorListItem = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  background-color: ${(props) => "#" + props.bgColor};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover,
  &.selected {
    transform: translateY(-10px);
  }
`;

const Form = styled.form``;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-bottom: 1.2rem;
  }
`;

const FormLabel = styled.label`
  color: #151515;
  font-weight: normal;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  &.in-valid {
    color: #d01c27;
  }
`;

const Input = styled.input`
  font-size: 1.125rem;
  padding: 0.6rem 0.3rem;
  margin-bottom: 0.5rem;
  &.in-valid {
    border: 1px solid #d01c27;
  }
`;

function CreateChrater({ currentQuestinStep, onClickHandler }) {
  const [selectedColor, setSelectedColor] = useState();

  const selectColor = (event) => {
    if (selectedColor) {
      selectedColor.classList.remove("selected");
    }
    setSelectedColor(event.target);
    event.target.classList.add("selected");
  };

  return (
    <>
      <ChraterImageSection>
        <img src={ChraterImage} alt="캐릭터 이미지" />
      </ChraterImageSection>
      {currentQuestinStep === 3 && (
        <ColorList>
          <ColorListItem bgColor="FDFDFD" onClick={selectColor}></ColorListItem>
          <ColorListItem bgColor="EB998D" onClick={selectColor}></ColorListItem>
          <ColorListItem bgColor="E599BF" onClick={selectColor}></ColorListItem>
          <ColorListItem bgColor="B6A7CE" onClick={selectColor}></ColorListItem>
          <ColorListItem bgColor="71B6E5" onClick={selectColor}></ColorListItem>
          <ColorListItem bgColor="C2E3C4" onClick={selectColor}></ColorListItem>
          <ColorListItem bgColor="2E3545" onClick={selectColor}></ColorListItem>
        </ColorList>
      )}

      {currentQuestinStep > 3 && (
        <Form>
          <FormSection>
            <FormLabel>닉네임</FormLabel>
            <Input placeholder="산타" />
          </FormSection>
          <FormSection>
            <ButtonS.FormButton onClick={onClickHandler}>확인</ButtonS.FormButton>
          </FormSection>
        </Form>
      )}

      <section>
        {currentQuestinStep === 3 && <ButtonS.FormButton onClick={onClickHandler}>색상 선택하기</ButtonS.FormButton>}
      </section>
    </>
  );
}

export default CreateChrater;
