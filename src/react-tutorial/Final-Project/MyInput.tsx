import clsx from 'clsx';
import { type } from 'os';
import React from 'react';

type MyInputPropsType = {
  defaultText?: string;
  onInput?: () => void;
  className?: string;
  required?: boolean;
  type?: string;
};

export default function MyInput({ defaultText, className, required, type, onInput }: MyInputPropsType) {
  const classNames = clsx({ input: true }, className);
  return (
    <>
      <label className='label'>
        {defaultText}
        {required && <span className='input-required'>*</span>}
        <div>
          <input type={type} placeholder={defaultText} required={required} onInput={onInput} />
        </div>
      </label>
    </>
  );
}
