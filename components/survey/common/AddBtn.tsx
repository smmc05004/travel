interface Props {
  onClick: () => void;
}

const AddBtn = ({ onClick }: Props) => {
  return (
    <div>
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
};

export default AddBtn;
