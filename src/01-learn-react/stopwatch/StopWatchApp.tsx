import { useReducer, useRef, useState } from 'react';

export default function StopWatchApp() {
  const [now, setNow] = useState(0);
  const intervalRef = useRef<any>(null);
  const startTimeRef = useRef<any>(0);

  function handleStart() {
    startTimeRef.current = Date.now();
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  let secondsPassed = 0;
  if (startTimeRef.current != null && now != null) {
    secondsPassed = (now - startTimeRef.current) / 1000;
  }

  return (
    <>
      <h1>Time passed:{secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
