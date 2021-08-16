interface Props {
  ids: number;
  text: string;
}

const RadioOption = ({ ids, text }: Props) => {
  return (
    <div>
      <input type="radio" id={String(ids)} />
      <label htmlFor={String(ids)}>{text}</label>
      <input type="text" />
    </div>
  );
};

export default RadioOption;
