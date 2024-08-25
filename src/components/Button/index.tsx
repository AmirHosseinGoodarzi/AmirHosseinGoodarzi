import { ReactNode } from "react";
import { ButtonTypes, ButtonSizes } from "~/utils/enums";
import "./button.scss";

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  onClick?: () => void;
};

const Button = ({
  children,
  icon,
  className,
  type,
  size,
  ...otherProps
}: Props) => {
  return (
    <button
      className={`Button_wrapper ${className ?? ""} ${
        type ?? ButtonTypes.Fill
      } ${size ?? ButtonSizes.Medium}`}
      {...otherProps}
    >
      {icon && <div className="icon">{icon}</div>}
      <div>{children}</div>
    </button>
  );
};

export default Button;
