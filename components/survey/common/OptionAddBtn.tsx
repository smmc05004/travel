import { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  addOption: () => void;
}

const OptionAddBtnWrapper = styled.div``;

const OptionAddBtn = ({ addOption }: Props): ReactElement => {
  return (
    <OptionAddBtnWrapper>
      <button type="button" onClick={addOption}>
        보기 추가
      </button>
    </OptionAddBtnWrapper>
  );
};

export default OptionAddBtn;
