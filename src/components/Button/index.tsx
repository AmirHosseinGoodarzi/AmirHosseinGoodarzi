import { ButtonTypes, ButtonSizes } from "~/utils/enums";
import "./button.scss";

type Props = {
  children: any;
  icon?: any;
  className?: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
};

const Button = ({ children, icon, className, type,size }: Props) => {
  return (
    <button
      className={`Button_wrapper ${className ?? ""} ${
        type ?? ButtonTypes.Fill
      } ${size ?? ButtonSizes.Medium}`}
    >
      {icon && <div className="icon">{icon}</div>}
      <div>{children}</div>
    </button>
  );
};

export default Button;
