import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.3rem;
`;

const Step = styled.div`
  width: 50%;
  margin-right: 0.2rem;
  height: 6px;
  background-color: #dadde1;
  border-radius: 10px;
  &:last-child {
    margin-right: 0;
  }
  &.current-step {
    background-color: #007aff;
  }
`;

function StepBar({ step, currentStep }) {
  const displayStepBar = (step) => {
    const steps = [];

    for (let i = 0; i < step; i++) {
      let setClassName = "";
      if (i <= currentStep) {
        setClassName = "current-step";
      }
      steps.push(<Step key={i} className={setClassName} />);
    }

    return steps;
  };
  return <Container>{displayStepBar(step)}</Container>;
}

export default StepBar;
