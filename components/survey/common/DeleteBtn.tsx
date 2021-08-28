import { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

const Btn = styled.button``;

const DeleteBtn = ({ onClick }: Props): ReactElement => {
  return (
    <Btn type="button" onClick={onClick}>
      X
    </Btn>
  );
};

export default DeleteBtn;
