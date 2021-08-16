import SingleSelect from "./types/SingleSelect";

const SurveyItem = ({ surveyObj, handleAddOption }) => {
  return (
    <div>
      <SingleSelect
        options={surveyObj.options}
        surveyId={surveyObj.id}
        handleAddOption={handleAddOption}
      />
    </div>
  );
};

export default SurveyItem;
