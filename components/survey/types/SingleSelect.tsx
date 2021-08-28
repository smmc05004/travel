import React, { ReactElement, useRef } from "react";
import { useDispatch } from "react-redux";
import surveySlice from "../../../reducers/survey";
import RadioOption from "./RadioOption";
import styled from "styled-components";
import QuestionHeader from "../common/QuestionHeader";
import QuestionArea from "../common/QuestionArea";
import OptionAddBtn from "../common/OptionAddBtn";
import { optionProps } from "../../../interface/survey";

const QuestionWrapper = styled.div``;

interface Props {
  options: optionProps[];
  text: string;
  questionId: number;
}

const SingleSelect = ({ options, text, questionId }: Props): ReactElement => {
  const dispatch = useDispatch();

  // 옵션 리스트
  const optionList = options.map((optionObj, index) => {
    return (
      <RadioOption
        key={`question${questionId}-option${index}`}
        ids={`question${questionId}-option${index}`}
        text={optionObj.option}
        questionId={questionId}
        optionId={index}
      />
    );
  });

  // 질문 입력
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(surveySlice.actions.CHANGE_QUESTION({ questionId, value }));
  };

  // 옵션 추가
  const addOption = () => {
    dispatch(surveySlice.actions.ADD_OPTION({ questionId }));
  };

  return (
    <QuestionWrapper>
      <div className="question_header_wrapper">
        <QuestionHeader questionId={questionId} />

        <QuestionArea questionId={questionId} text={text} onChange={onChange} />
      </div>

      <div>
        <ul>{optionList}</ul>
      </div>

      <OptionAddBtn addOption={addOption} />
    </QuestionWrapper>
  );
};

export default SingleSelect;
