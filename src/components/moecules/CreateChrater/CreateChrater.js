import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoils/Atoms";
import { Label } from "../../atoms/Label";
import { ConfirmButton } from "../../atoms/buttons";
import { useForm } from "react-hook-form";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { firebaseStorage } from "../../../firebase/config";

const ChraterImageSection = styled.section`
  height: 300px;
  & img {
    width: 100%;
    height: 100%;
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
  background-color: ${(props) => props.bgColor};
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useRecoilState(userState);
  const [selectedColor, setSelectedColor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const characterColorList = [
    { bgColor: "#FDFDFD", colorName: "white" },
    { bgColor: "#EB998D", colorName: "orange" },
    { bgColor: "#E599BF", colorName: "pink" },
    { bgColor: "#B6A7CE", colorName: "purple" },
    { bgColor: "#71B6E5", colorName: "blue" },
    { bgColor: "#C2E3C4", colorName: "green" },
    { bgColor: "#2E3545", colorName: "black" },
  ];

  const getCharacters = async (bgColorUrl = "white") => {
    setIsLoading(true);

    const fileRef = ref(firebaseStorage, `${bgColorUrl}-bg-charaters/`);
    const result = await listAll(fileRef);
    const urls = await Promise.all(
      result.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return url;
      })
    );

    if (urls.length !== 0) {
      const randomCharacterIndex = Math.floor(Math.random() * urls.length);
      console.log(urls[randomCharacterIndex]);
      setUser((prev) => ({
        ...prev,
        characterUrl: urls[randomCharacterIndex],
      }));
    }

    setIsLoading(false);
  };

  const selectColor = async (target, colorObj) => {
    if (selectedColor) {
      selectedColor.classList.remove("selected");
    }
    await getCharacters(colorObj.colorName);

    setSelectedColor(target);
    setUser((prev) => ({
      ...prev,
      characterColor: { ...colorObj },
    }));
    target.classList.add("selected");
  };

  const onValid = (data) => {
    const { nickname } = data;
    const createdUser = {
      ...user,
      nickname,
    };
    setUser(createdUser);
    console.log(createdUser);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <ChraterImageSection>
        {!isLoading ? user.characterUrl && <img src={user.characterUrl} alt="캐릭터 이미지" /> : "loading..."}
      </ChraterImageSection>
      {currentQuestinStep === 3 && (
        <ColorList>
          {characterColorList.map((color, idx) => (
            <ColorListItem
              key={idx}
              className={idx === 0 && !selectedColor ? "selected" : ""}
              bgColor={color.bgColor}
              onClick={async (event) => await selectColor(event.target, color)}
            />
          ))}
        </ColorList>
      )}

      {currentQuestinStep > 3 && (
        <Form onSubmit={handleSubmit(onValid)}>
          <FormSection>
            <Label className={errors.nickname ? "in-valid" : ""} marginSize="0.2rem">
              닉네임
            </Label>
            <Input
              className={errors.nickname ? "in-valid" : ""}
              {...register("nickname", { required: true, minLength: 4, maxLength: 10 })}
              placeholder="산타"
              minLength={4}
              maxLength={10}
            />
          </FormSection>
          <FormSection>
            <ConfirmButton>확인</ConfirmButton>
          </FormSection>
        </Form>
      )}

      <section>
        {currentQuestinStep === 3 && <ConfirmButton onClick={onClickHandler}>색상 선택하기</ConfirmButton>}
      </section>
    </>
  );
}

export default CreateChrater;
