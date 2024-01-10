type PropsType = {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean
  type: 'primary' | 'secondary'
};

const Button = ({text, onClick = () => {}, isDisabled, type}: PropsType) => {
  return (
    <button className={`button-${type}`} onClick={onClick} disabled={isDisabled}>
      <div className="text-wrapper">{text}</div>
    </button>
  );
};

export default Button;