import { useEffect, useRef } from 'react';

type VideoPlayProps = {
  src: string;
  isPlaying: boolean;
};
export function VideoPlay({ src, isPlaying }: VideoPlayProps) {
  const ref = useRef<HTMLVideoElement>(null);
  console.log('currenTime', ref.current?.currentTime);

  useEffect(() => {
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {ref.current?.currentTime}
      <video ref={ref} src={src} loop playsInline></video>;
    </>
  );
}
