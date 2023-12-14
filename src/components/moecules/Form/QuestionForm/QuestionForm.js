import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as FormS from "../AccountForm/Form.style";
import { Checkbox, CheckboxContainer, CheckboxLabel } from "../../../atoms/Checkbox";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoils/Atoms";
import { ConfirmButton } from "../../../atoms/buttons";

function QuestionForm({ currentQuestinStep, setCurrentQuestionStep, onClickHandler }) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [createdUserInfo, setCreatedUserInfo] = useState();
  const [user, setUser] = useRecoilState(userState);

  const values = getValues();

  const onCheckBox = (type = "all", checked, value) => {
    if (type === "firstValue") {
      if (checked) {
        setValue("firstValue", value);
        console.log(value);
      } else {
        setValue("firstValue", "");
      }
    } else if (type === "secondValue") {
      if (checked) {
        setValue("secondValue", value);
      } else {
        setValue("secondValue", "");
      }
    } else if (type === "thirdValue") {
      if (checked) {
        setValue("thirdValue", value);
      } else {
        setValue("thirdValue", "");
      }
    } else if (type === "fourValue") {
      if (checked) {
        setValue("fourValue", value);
      } else {
        setValue("fourValue", "");
      }
    }
  };

  console.log(user);

  const onValid = (data) => {
    const { firstValue, secondValue, thirdValue, fourValue } = data;

    if (currentQuestinStep === 0) {
      setUser((prev) => ({
        ...prev,
        question: {
          ...prev.question,
          firstQuestion: {
            firstValue,
            secondValue,
            thirdValue,
            fourValue,
          },
        },
      }));
    } else if (currentQuestinStep === 1) {
      setUser((prev) => ({
        ...prev,
        question: {
          ...prev.question,
          secondQuestion: {
            firstValue,
            secondValue,
            thirdValue,
            fourValue,
          },
        },
      }));
    } else if (currentQuestinStep === 2) {
      setUser((prev) => ({
        ...prev,
        question: {
          ...prev.question,
          thirdQuestion: {
            firstValue,
            secondValue,
            thirdValue,
            fourValue,
          },
        },
      }));
    }
    setValue("firstValue", "");
    setValue("secondValue", "");
    setValue("thirdValue", "");
    setValue("fourValue", "");

    setCurrentQuestionStep((prev) => prev + 1);
  };

  return (
    <FormS.Form onSubmit={handleSubmit(onValid)}>
      <FormS.FormMain>
        {currentQuestinStep === 0 && (
          <FormS.Section>
            <CheckboxContainer>
              <Checkbox
                {...register("firstValue")}
                type="checkbox"
                id="first-question"
                name="first-question"
                onChange={(event) => onCheckBox("firstValue", event.target.checked, "산타와 선물")}
              />
              <CheckboxLabel htmlFor="first-question">산타와 선물</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("secondValue")}
                type="checkbox"
                id="second-question"
                name="second-question"
                onChange={(event) => onCheckBox("secondValue", event.target.checked, "크리스마스 트리와 장식2")}
              />
              <CheckboxLabel htmlFor="second-question">크리스마스 트리와 장식1</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("thirdValue")}
                type="checkbox"
                id="third-question"
                name="third-question"
                onChange={(event) => onCheckBox("thirdValue", event.target.checked, "크리스마스 트리와 장식3")}
              />
              <CheckboxLabel htmlFor="third-question">크리스마스 트리와 장식3</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("fourValue")}
                type="checkbox"
                id="four-question"
                name="four-question"
                onChange={(event) => onCheckBox("fourValue", event.target.checked, "크리스마스 트리와 장식4")}
              />
              <CheckboxLabel htmlFor="four-question">크리스마스 트리와 장식4</CheckboxLabel>
            </CheckboxContainer>
          </FormS.Section>
        )}
        {currentQuestinStep === 1 && (
          <FormS.Section>
            <CheckboxContainer>
              <Checkbox
                {...register("firstValue")}
                type="checkbox"
                id="first-question"
                name="first-question"
                onChange={(event) => onCheckBox("firstValue", event.target.checked, "산타와 선물")}
              />
              <CheckboxLabel htmlFor="first-question">산타와 선물2</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("secondValue")}
                type="checkbox"
                id="second-question"
                name="second-question"
                onChange={(event) => onCheckBox("secondValue", event.target.checked, "크리스마스 트리와 장식2")}
              />
              <CheckboxLabel htmlFor="second-question">크리스마스 트리와 장식4</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("thirdValue")}
                type="checkbox"
                id="third-question"
                name="third-question"
                onChange={(event) => onCheckBox("thirdValue", event.target.checked, "크리스마스 트리와 장식3")}
              />
              <CheckboxLabel htmlFor="third-question">크리스마스 트리와 장식5</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("fourValue")}
                type="checkbox"
                id="four-question"
                name="four-question"
                onChange={(event) => onCheckBox("fourValue", event.target.checked, "크리스마스 트리와 장식4")}
              />
              <CheckboxLabel htmlFor="four-question">크리스마스 트리와 장식6</CheckboxLabel>
            </CheckboxContainer>
          </FormS.Section>
        )}
        {currentQuestinStep === 2 && (
          <FormS.Section>
            <CheckboxContainer>
              <Checkbox
                {...register("firstValue")}
                type="checkbox"
                id="first-question"
                name="first-question"
                onChange={(event) => onCheckBox("firstValue", event.target.checked, "산타와 선물")}
              />
              <CheckboxLabel htmlFor="first-question">산타와 선물3</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("secondValue")}
                type="checkbox"
                id="second-question"
                name="second-question"
                onChange={(event) => onCheckBox("secondValue", event.target.checked, "크리스마스 트리와 장식2")}
              />
              <CheckboxLabel htmlFor="second-question">크리스마스 트리와 장식7</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("thirdValue")}
                type="checkbox"
                id="third-question"
                name="third-question"
                onChange={(event) => onCheckBox("thirdValue", event.target.checked, "크리스마스 트리와 장식3")}
              />
              <CheckboxLabel htmlFor="third-question">크리스마스 트리와 장식8</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                {...register("fourValue")}
                type="checkbox"
                id="four-question"
                name="four-question"
                onChange={(event) => onCheckBox("fourValue", event.target.checked, "크리스마스 트리와 장식4")}
              />
              <CheckboxLabel htmlFor="four-question">크리스마스 트리와 장식9</CheckboxLabel>
            </CheckboxContainer>
          </FormS.Section>
        )}
      </FormS.FormMain>
      <FormS.FormFooter>
        <ConfirmButton>프로필 선택</ConfirmButton>
      </FormS.FormFooter>
    </FormS.Form>
  );
}

export default QuestionForm;
