type PropsType = {
  icon: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean
  className?: string
};


const IconButton = ({icon, onClick = () => {}, isDisabled, className = ''}: PropsType) => {
  return (
    <button className={`icon_button ${className}`} onClick={onClick} disabled={isDisabled}>
      {icon}
    </button>
  );
};

export default IconButton;