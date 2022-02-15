
interface Props {
  variant: 'orange' | 'normal';
  children: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ variant, children, onClick}: Props) => {
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
