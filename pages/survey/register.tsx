import { NextPage } from "next";
import React from "react";
import { useDispatch } from "react-redux";
import AddBtn from "../../components/survey/common/AddBtn";
import QuestionList from "../../components/survey/QuestionList";
import { useTypedSelector } from "../../components/utils/hooks/useTypedSelector";
import surveySlice from "../../reducers/survey";

const Register: NextPage = () => {
  const dispatch = useDispatch();
  const { survey } = useTypedSelector(({ survey }) => {
    return {
      survey: survey.survey,
    };
  });

  // 질문 추가
  const addQuestion = () => {
    dispatch(surveySlice.actions.ADD_QUESTION());
  };

  return (
    <div>
      <div>
        <h2>설문 등록하기 </h2>
      </div>

      <QuestionList survey={survey} />

      <AddBtn addQuestion={addQuestion} />
    </div>
  );
};

export default Register;
