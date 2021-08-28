import React, { ReactElement } from "react";
import { SurveyProps } from "../../interface/survey";
import QuestionItem from "./QuestionItem";
import styled from "styled-components";

interface Props {
  survey: SurveyProps[];
}

const ListWrapper = styled.div``;

const SurveyList = ({ survey }: Props): ReactElement => {
  // 질문 리스트
  const surveyList = survey.map((surveyObj, index) => {
    return (
      <QuestionItem
        key={`question${index}`}
        surveyObj={surveyObj}
        questionId={index}
      />
    );
  });

  return (
    <ListWrapper>
      <ul>{surveyList}</ul>
    </ListWrapper>
  );
};

export default SurveyList;
