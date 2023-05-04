import { type } from 'os';
import React, { useRef } from 'react';
type DebouncedButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};
export default function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
  const timeoutRef = useRef<any>(null);

  return (
    <>
      <button
        onClick={() => {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            onClick();
          }, 1000);
        }}
      >
        {children}
      </button>
    </>
  );
}
