import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import surveySlice from "../../../reducers/survey";
import styled from "styled-components";

interface Props {
  ids: string;
  text: string;
  questionId: number;
  optionId: number;
}

const OptionWrapper = styled.div``;

const RadioOption = ({
  ids,
  text,
  questionId,
  optionId,
}: Props): ReactElement => {
  const dispatch = useDispatch();

  // 옵션 삭제
  const onClick = () => {
    dispatch(surveySlice.actions.DELETE_OPTION({ questionId, optionId }));
  };

  // 옵션 수정
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(
      surveySlice.actions.CHANGE_OPTION({ questionId, optionId, value })
    );
  };

  return (
    <OptionWrapper>
      <input type="radio" id={ids} />
      {/* <label htmlFor={ids}>{text}</label> */}
      <input type="text" onChange={onChange} value={text} />
      <button type="button" onClick={onClick}>
        X
      </button>
    </OptionWrapper>
  );
};

export default RadioOption;
