import React, { useState } from "react";
import Question from "../../components/moecules/Question/Question";
import * as TemplateS from "../../components/templates/template.style";

function CreateProfile() {
  // const [profile, setProfile] = useState({
  //   contact: "",
  //   gender: "",
  //   allTerm: false,
  //   ageTerm: false,
  //   informationTerm: false,
  //   question: {
  //     firstQuestion: "첫 번째 질문 대답",
  //     secondQuestion: "두 번째 질문 대답",
  //     thirdQuestion: "세 번째 질문 대답",
  //   },
  //   characterColor: "",
  //   nickname: "",
  // });

  const [currentQuestinStep, setCurrentQuestionStep] = useState(0);
  const onClickHandler = () => {
    setCurrentQuestionStep((prev) => prev + 1);
  };
  return (
    <TemplateS.FormLayout>
      <Question currentQuestinStep={currentQuestinStep} onClickHandler={onClickHandler} />
    </TemplateS.FormLayout>
  );
}

export default CreateProfile;
