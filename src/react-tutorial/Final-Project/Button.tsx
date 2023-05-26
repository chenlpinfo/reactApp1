import clsx from 'clsx';

type ButtonPropsType = {
  className?: string;
  outline?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ className, outline, children, ...rest }: ButtonPropsType) {
  const newClassName = clsx(
    {
      btn: true,
      'btn-default': !outline,
      'btn-outline': outline,
    },
    className
  ); // 'btn btn-outline xxx' or  'btn btn-default xxx'
  return (
    <>
      <button {...rest} className={newClassName}>
        {children}
      </button>
    </>
  );
}
