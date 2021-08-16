import { useRef } from "react";
import RadioOption from "./RadioOption";

const SingleSelect = ({ surveyId, options, handleAddOption }) => {
  const optionId = useRef(0);

  const optionList = options.map((optionObj) => {
    console.log("optionObj: ", optionObj);
    return (
      <RadioOption
        key={optionObj.id}
        ids={optionObj.id}
        text={optionObj.text}
      />
    );
  });

  return (
    <div>
      <div>
        <label htmlFor={`survey${surveyId}`}>Question</label>

        <input type="text" id={`survey${surveyId}`} />
        <select defaultValue={1}>
          <option value={1}>단일 선택</option>
          <option value={2}>다중 선택</option>
        </select>
      </div>

      <div>
        <ul>{optionList}</ul>
      </div>

      <div>
        <button type="button" onClick={(e) => handleAddOption(e, surveyId)}>
          보기 추가
        </button>
      </div>
    </div>
  );
};

export default SingleSelect;
