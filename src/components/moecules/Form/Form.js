import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as FormS from "./Form.style";
import * as FormButtonS from "../../atoms/buttons/FormBtn.style";

function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const [gender, setGenger] = useState("male");
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

  const selectedGender = (gender) => setGenger(gender);

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
          <FormS.FormContactLabel htmlFor="contact-details" className={errors.contactDetails ? "in-valid" : ""}>
            연락처
          </FormS.FormContactLabel>
          <FormS.FormContactInput
            {...register("contactDetails", { required: true, minLength: 4 })}
            type="text"
            id="contact-details"
            className={errors.contactDetails ? "in-valid" : ""}
            placeholder="인스타그램, 카카오톡 연락처 등"
          />
          <FormS.FormContactParagraph id="contact-description">
            새로운 친구와 소통하고 싶은 SNS의 아이디 혹은 연락처를 알려주세요.{" "}
            <FormS.FormHighlightRedSpan className="highlight-red">12/25</FormS.FormHighlightRedSpan>일에 새로운
            친구들에게만 공개하는 내용이에요
          </FormS.FormContactParagraph>
        </FormS.Section>
        <FormS.Section>
          <FormS.FormGenderSelectContainer>
            <FormS.FormGenderSelectBox
              onClick={() => selectedGender("male")}
              className={gender === "male" ? "selected" : ""}
            >
              <span>남성</span>
            </FormS.FormGenderSelectBox>
            <FormS.FormGenderSelectBox
              onClick={() => selectedGender("female")}
              className={gender === "female" ? "selected" : ""}
            >
              <span>여성</span>
            </FormS.FormGenderSelectBox>
          </FormS.FormGenderSelectContainer>
        </FormS.Section>
        <FormS.Section>
          <FormS.FormCheckboxContainer>
            <FormS.FormCheckbox
              {...register("allTerms")}
              type="checkbox"
              id="all-terms"
              name="all-terms"
              onChange={(event) => onCheckBox("all", event.target.checked)}
            />
            <FormS.FormCheckboxLabel htmlFor="all-terms">전체 동의</FormS.FormCheckboxLabel>
          </FormS.FormCheckboxContainer>
        </FormS.Section>
        <hr />
        <FormS.Section>
          <FormS.FormCheckboxContainer>
            <FormS.FormCheckbox
              {...register("termsAge", { required: true })}
              type="checkbox"
              id="terms-age"
              name="terms-age"
              onChange={(event) => onCheckBox("age", event.target.checked)}
            />
            <FormS.FormCheckboxLabel htmlFor="terms-age">
              <FormS.FormHighlightRedSpan>(필수)</FormS.FormHighlightRedSpan> 만 14세 이상이에요
            </FormS.FormCheckboxLabel>
          </FormS.FormCheckboxContainer>
          <FormS.FormCheckboxContainer>
            <FormS.FormCheckbox
              {...register("termsInformation", { required: true })}
              type="checkbox"
              id="terms-information"
              name="terms-information"
              onChange={(event) => onCheckBox("information", event.target.checked)}
            />
            <FormS.FormCheckboxLabel htmlFor="terms-information">
              <FormS.FormHighlightRedSpan>(필수)</FormS.FormHighlightRedSpan> 이용약관 및 개인정부수집이용 동의
            </FormS.FormCheckboxLabel>
          </FormS.FormCheckboxContainer>
        </FormS.Section>
      </FormS.FormMain>
      <FormS.FormFooter>
        <FormButtonS.FormButton>확인</FormButtonS.FormButton>
      </FormS.FormFooter>
    </FormS.Form>
  );
}

export default Form;
