import { ButtonHTMLAttributes } from "react";
import "./style.css";

interface ButtonProps {
  isLoading?: boolean;
}

const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
) => {
  const { children, className, isLoading, ...rest } = props;
  const classList = [
    "button-block",
    className ? className : "",
    isLoading ? "button-block--loading" : "",
  ];
  return (
    <button
      type="button"
      className={classList.join(" ")}
      {...rest}
      disabled={isLoading}
    >
      {isLoading && (
        <span className="buttn-block__icon-loading lds-ring">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      )}
      <span className="button-block__label">{children}</span>
    </button>
  );
};

export default Button;
