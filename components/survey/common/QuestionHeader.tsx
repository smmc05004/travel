import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import surveySlice from "../../../reducers/survey";
import DeleteBtn from "./DeleteBtn";

interface Props {
  questionId: number;
}

const QuestionHeaderWrapper = styled.div``;

const QuestionHeader = ({ questionId }: Props): ReactElement => {
  const dispatch = useDispatch();

  // 질문 삭제
  const onClick = () => {
    dispatch(surveySlice.actions.DELETE_QUESTION({ questionId }));
  };

  return (
    <QuestionHeaderWrapper>
      <DeleteBtn onClick={onClick} />
    </QuestionHeaderWrapper>
  );
};

export default QuestionHeader;
