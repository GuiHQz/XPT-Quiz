import "./index.scss";

interface ButtonProps {
  children?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div id="comp-button">
      <button className={`button ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
