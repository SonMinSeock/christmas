import React, { useState } from "react";
import * as QuestionS from "./Question.style";
import QuestionForm from "../Form/QuestionForm/QuestionForm";
import StepBar from "../../atoms/stepbar/StepBar";

function Question() {
  const [currentQuestinStep, setCurrentQuestionStep] = useState(0);

  const questionTitleList = [
    <h1>
      ‘크리스마스’ 하면 무엇이
      <br />
      떠오르나요?
    </h1>,
    <h1>
      ‘크리스마스’ 하면 어떤
      <br />
      분위기가 떠오르나요?
    </h1>,
    <h1>
      ‘크리스마스’에 가장 기대되는
      <br /> 활동은 무엇인가요?
    </h1>,
  ];

  const onClickHandler = () => {
    if (currentQuestinStep < questionTitleList.length - 1) {
      setCurrentQuestionStep((prev) => prev + 1);
      console.log("!!");
    }
  };

  return (
    <>
      <QuestionS.Header>
        <StepBar step={questionTitleList.length} currentStep={currentQuestinStep} />
        {questionTitleList[currentQuestinStep]}
      </QuestionS.Header>
      <main>
        <QuestionForm onClickHandler={onClickHandler} />
      </main>
    </>
  );
}

export default Question;
