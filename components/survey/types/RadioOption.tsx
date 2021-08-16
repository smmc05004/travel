interface Props {
  ids: string;
  text: string;
}

const RadioOption = ({ ids, text }: Props) => {
  return (
    <div>
      <input type="radio" id={ids} />
      <label htmlFor={ids}>{text}</label>
      <input type="text" />
    </div>
  );
};

export default RadioOption;
