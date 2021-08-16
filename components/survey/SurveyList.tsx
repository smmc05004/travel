import React from "react";
import SurveyItem from "./SurveyItem";

interface OptionProps {
  optionId: number;
  text: string;
}

interface SurveyProps {
  type: number;
  id: number;
  options: OptionProps[];
}

interface Props {
  survey: SurveyProps[];
  handleAddOption: (
    e: React.MouseEvent<HTMLButtonElement>,
    surveyId: number
  ) => void;
}

const SurveyList = ({ survey, handleAddOption }: Props) => {
  const surveyList = survey.map((surveyObj, index) => {
    console.log("surveyObj: ", surveyObj);

    return (
      <SurveyItem
        key={surveyObj.id}
        surveyObj={surveyObj}
        handleAddOption={handleAddOption}
      />
    );
  });

  return (
    <div>
      <ul>{surveyList}</ul>
    </div>
  );
};

export default SurveyList;
