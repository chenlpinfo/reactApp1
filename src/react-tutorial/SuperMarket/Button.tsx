import clsx from 'clsx';
import React, { Children } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  const { children, outline, className, onClick } = props;
  const classNames = clsx(
    {
      btn: true,
      'btn-default': !outline,
      'btn-outline': outline,
    },
    className
  );

  return (
    <>
      <button className={classNames} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
