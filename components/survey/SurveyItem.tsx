import SingleSelect from "./types/SingleSelect";

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
  surveyObj: SurveyProps;
  handleAddOption: (
    e: React.MouseEvent<HTMLButtonElement>,
    surveyId: number
  ) => void;
}
const SurveyItem = ({ surveyObj, handleAddOption }: Props) => {
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
