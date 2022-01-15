
interface Props {
    variant: 'orange' | 'normal';
    children: any
}

export const Button = ({ variant, children }: Props) => {
  return (
    <>
      <button
        className={variant === 'orange' ? 'button-orange' : 'button-normal'}
      >
        {children}
      </button>
    </>
  );
};
