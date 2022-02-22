import { FC } from "react";

interface IButton {
  variant: 'orange' | 'normal';
  onClick?: () => void;
}

export const Button: FC<IButton> = ({ variant, children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={variant === 'orange' ? 'button-orange' : 'button-normal'}
      >
        {children}
      </button>
    </>
  );
};
