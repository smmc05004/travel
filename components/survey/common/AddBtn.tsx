import { ReactElement } from "react";

interface Props {
  addQuestion: () => void;
}

const AddBtn = ({ addQuestion }: Props): ReactElement => {
  return (
    <div>
      <button type="button" onClick={addQuestion}>
        추가
      </button>
    </div>
  );
};

export default AddBtn;
