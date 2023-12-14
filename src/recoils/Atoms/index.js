// atoms.ts
import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    contact: "",
    gender: "",
    allTerm: false,
    ageTerm: false,
    informationTerm: false,
    question: {
      firstQuestion: {
        firstValue: "",
        secondValue: "",
        thirdValue: "",
        fourValue: "",
      },
      secondQuestion: {
        firstValue: "",
        secondValue: "",
        thirdValue: "",
        fourValue: "",
      },
      thirdQuestion: {
        firstValue: "",
        secondValue: "",
        thirdValue: "",
        fourValue: "",
      },
    },
    characterColor: { bgColor: "#FDFDFD", colorName: "white" },
    characterUrl: "",
    nickname: "",
  },
});
