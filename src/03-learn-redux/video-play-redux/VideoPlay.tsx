import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectIsPlaying } from '../../store/sliceVideoPlay';

export function VideoPlay({ src }: { src: string }) {
  // const { isPlaying } = useContext(VideoPlayContext);
  const isPlaying = useSelector(selectIsPlaying);

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
