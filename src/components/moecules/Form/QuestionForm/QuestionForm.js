import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as FormS from "../AccountForm/Form.style";
import * as FormButtonS from "../../../atoms/buttons/FormBtn.style";
import * as QuestionFormS from "./QuestionForm.style";

function QuestionForm({ onClickHandler }) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [createdUserInfo, setCreatedUserInfo] = useState();

  const onValid = (data) => {
    const { contactDetails, allTerms, termsAge, termsInformation } = data;
    const userInfo = {
      contact: contactDetails, // 전화번호 혹은 SNS 계정
      isAllTerms: allTerms, // 전체동의
      isTermsAge: termsAge, // 14세 이상 나이 동의,
      isTermsInformation: termsInformation, // 개인정보 동의
    };

    setCreatedUserInfo(userInfo);
    console.log(userInfo);
  };

  const onCheckBox = (type = "all", checked) => {
    const { termsAge, termsInformation } = getValues();
    if (type === "all") {
      setValue("allTerms", checked);
      setValue("termsAge", checked);
      setValue("termsInformation", checked);
    } else if (type === "age") {
      setValue("termsAge", checked);
      if (termsInformation) {
        setValue("allTerms", checked);
      } else if (termsAge === false) {
        setValue("allTerms", false);
      }
    } else if (type === "information") {
      setValue("termsInformation", checked);
      if (termsAge) {
        setValue("allTerms", checked);
      } else if (termsInformation === false) {
        setValue("allTerms", false);
      }
    }
  };

  return (
    <FormS.Form onSubmit={handleSubmit(onValid)}>
      <FormS.FormMain>
        <FormS.Section>
          <FormS.FormCheckboxContainer>
            <QuestionFormS.QuestionCheckbox
              {...register("first-question", { required: true })}
              type="checkbox"
              id="first-question"
              name="first-question"
              onChange={(event) => onCheckBox("firstQuestion", event.target.checked)}
            />
            <QuestionFormS.QuestionCheckboxLabel htmlFor="first-question">
              산타와 선물
            </QuestionFormS.QuestionCheckboxLabel>
          </FormS.FormCheckboxContainer>
          <FormS.FormCheckboxContainer>
            <QuestionFormS.QuestionCheckbox
              {...register("second-question", { required: true })}
              type="checkbox"
              id="second-question"
              name="second-question"
              onChange={(event) => onCheckBox("secondQuestion", event.target.checked)}
            />
            <QuestionFormS.QuestionCheckboxLabel htmlFor="second-question">
              크리스마스 트리와 장식
            </QuestionFormS.QuestionCheckboxLabel>
          </FormS.FormCheckboxContainer>
          <FormS.FormCheckboxContainer>
            <QuestionFormS.QuestionCheckbox
              {...register("third-question", { required: true })}
              type="checkbox"
              id="third-question"
              name="third-question"
              onChange={(event) => onCheckBox("thirdQuestion", event.target.checked)}
            />
            <QuestionFormS.QuestionCheckboxLabel htmlFor="third-question">
              크리스마스 트리와 장식
            </QuestionFormS.QuestionCheckboxLabel>
          </FormS.FormCheckboxContainer>
          <FormS.FormCheckboxContainer>
            <QuestionFormS.QuestionCheckbox
              {...register("four-question", { required: true })}
              type="checkbox"
              id="four-question"
              name="four-question"
              onChange={(event) => onCheckBox("fourQuestion", event.target.checked)}
            />
            <QuestionFormS.QuestionCheckboxLabel htmlFor="four-question">
              크리스마스 트리와 장식
            </QuestionFormS.QuestionCheckboxLabel>
          </FormS.FormCheckboxContainer>
        </FormS.Section>
      </FormS.FormMain>
      <FormS.FormFooter>
        <FormButtonS.FormButton type="button" onClick={onClickHandler}>
          프로필 선택
        </FormButtonS.FormButton>
      </FormS.FormFooter>
    </FormS.Form>
  );
}

export default QuestionForm;
