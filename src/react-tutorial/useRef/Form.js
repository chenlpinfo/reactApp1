import React from 'react';
import { createRoot } from 'react-dom/client';
import { useRef, useEffect } from 'react';

export function Form() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log('inputRef.current', inputRef.current);
    inputRef.current.style.backgroundColor = 'red';
  }, []);

  return (
    <form>
      <h2>Welcome</h2>
      <input ref={inputRef} type='text' placeholder='Enter your name' />
    </form>
  );
}
