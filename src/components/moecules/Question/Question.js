import React, { useState } from "react";
import * as QuestionS from "./Question.style";
import QuestionForm from "../Form/QuestionForm/QuestionForm";
import StepBar from "../../atoms/stepbar/StepBar";
import CreateChrater from "../CreateChrater/CreateChrater";

function Question({ profile, setProfile, currentQuestinStep, setCurrentQuestionStep, onClickHandler }) {
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
    <h1>캐릭터 색상을 선택해 주세요</h1>,
    <h1>캐릭터 이름을 알려주세요</h1>,
  ];

  return (
    <>
      <QuestionS.Header>
        {currentQuestinStep < 3 && <StepBar step={3} currentStep={currentQuestinStep} />}
        {questionTitleList[currentQuestinStep]}
      </QuestionS.Header>
      <main>
        {currentQuestinStep < 3 && (
          <QuestionForm
            onClickHandler={onClickHandler}
            currentQuestinStep={currentQuestinStep}
            setCurrentQuestionStep={setCurrentQuestionStep}
          />
        )}
        {currentQuestinStep >= 3 && (
          <CreateChrater currentQuestinStep={currentQuestinStep} onClickHandler={onClickHandler} />
        )}
      </main>
    </>
  );
}

export default Question;
