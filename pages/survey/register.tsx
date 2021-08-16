import React, { useEffect, useState } from "react";
import Survey from ".";
import AddBtn from "../../components/survey/common/AddBtn";
import SurveyList from "../../components/survey/SurveyList";

interface OptionProps {
  optionId: number;
  text: string;
}

interface SurveyProps {
  type: number;
  id: number;
  options: OptionProps[];
}

const Register = () => {
  const [survey, setSurvey] = useState<SurveyProps[]>([]);
  console.log("survey: ", survey);

  const handleRegister = () => {
    const cnt = survey.length;
    const initObj = [
      {
        type: 1,
        id: cnt + 1,
        options: [
          {
            optionId: 1,
            text: "",
          },
        ],
      },
    ];

    const newSurveyArr = survey.concat(initObj);

    setSurvey(newSurveyArr);
  };

  const handleAddOption = (
    e: React.MouseEvent<HTMLButtonElement>,
    surveyId: number
  ) => {
    const filteredSurveyArr = survey.filter((surveyObj) => {
      return surveyObj.id === surveyId;
    });

    // 해당 번호의 survey 체크
    if (filteredSurveyArr.length > 0) {
      const surveyObj = filteredSurveyArr[0];
      const optionLength = surveyObj.options.length;
      surveyObj.options.push({
        optionId: optionLength + 1,
        text: "",
      });

      const otherArr = survey.filter((surveyObj) => {
        return surveyObj.id !== surveyId;
      });

      const newArr = otherArr.concat(surveyObj);
      setSurvey(newArr);
    }
  };

  useEffect(() => {
    setSurvey([]);
  }, []);

  return (
    <div>
      <div>
        <h2> 등록하기 </h2>
      </div>

      <SurveyList survey={survey} handleAddOption={handleAddOption} />

      <AddBtn onClick={handleRegister} />
    </div>
  );
};

export default Register;
