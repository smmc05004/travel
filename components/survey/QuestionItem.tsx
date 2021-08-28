import { ReactElement } from "react";
import { SurveyProps } from "../../interface/survey";
import SingleSelect from "./types/SingleSelect";
import styled from "styled-components";

interface Props {
  surveyObj: SurveyProps;
  questionId: number;
}

const ItemWrapper = styled.div``;

const SurveyItem = ({ surveyObj, questionId }: Props): ReactElement => {
  return (
    <ItemWrapper>
      <SingleSelect
        questionId={questionId}
        text={surveyObj.question}
        options={surveyObj.options}
      />
    </ItemWrapper>
  );
};

export default SurveyItem;
