import React, { useState } from "react";
import Question from "../../components/moecules/Question/Question";
import * as TemplateS from "../../components/templates/template.style";

function CreateProfile() {
  const [currentQuestinStep, setCurrentQuestionStep] = useState(0);
  const onClickHandler = () => {
    setCurrentQuestionStep((prev) => prev + 1);
  };
  return (
    <TemplateS.FormLayout>
      <Question
        currentQuestinStep={currentQuestinStep}
        setCurrentQuestionStep={setCurrentQuestionStep}
        onClickHandler={onClickHandler}
      />
    </TemplateS.FormLayout>
  );
}

export default CreateProfile;
