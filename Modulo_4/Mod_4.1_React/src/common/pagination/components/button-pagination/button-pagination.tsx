import { PropsWithChildren } from "react";
import style from "./button-pagination.module.scss";

interface Props {
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
}
export const ButtonPagination: React.FC<PropsWithChildren<Props>> = ({
  children,
  isDisabled = false,
  onClick,
  className,
}) => {
  return (
    <button
      className={className ? className : style.arrow}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
