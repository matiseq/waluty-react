import './Button.css';

const Button = ({
  id,
  onClick,
  children,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="button"
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
