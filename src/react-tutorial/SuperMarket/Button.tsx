import clsx from 'clsx';
import React, { Children } from 'react';

export default function Button(props: any) {
  const { Children, outline, className, ...rest } = props;
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
      <button className={classNames} {...rest}>
        {Children}
      </button>
    </>
  );
}
