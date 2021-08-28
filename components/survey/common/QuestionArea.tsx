import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  questionId: number;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuestionAreaWrapper = styled.div``;

const QuestionArea = ({ questionId, text, onChange }: Props): ReactElement => {
  return (
    <QuestionAreaWrapper>
      <label htmlFor={`survey${questionId}`}>Question: </label>

      <input
        type="text"
        id={`survey${questionId}`}
        onChange={onChange}
        value={text}
      />
      <select defaultValue={0}>
        <option value={0}>단일 선택</option>
        <option value={1}>다중 선택</option>
      </select>
    </QuestionAreaWrapper>
  );
};

export default QuestionArea;
