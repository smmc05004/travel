import SurveyItem from "./SurveyItem";

const SurveyList = ({ survey, handleAddOption }) => {
  const surveyList = survey.map((surveyObj, index) => {
    console.log("surveyObj: ", surveyObj);

    return (
      <SurveyItem surveyObj={surveyObj} handleAddOption={handleAddOption} />
    );
  });

  return (
    <div>
      <ul>{surveyList}</ul>
    </div>
  );
};

export default SurveyList;
