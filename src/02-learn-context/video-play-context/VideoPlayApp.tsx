import { useContext, useState } from 'react';
import { VideoPlay } from './VideoPlay';
import { VideoPlayContext } from './VideoPlayContext';

export default function VideoPlayApp() {
  const { isPlaying, setIsPlaying } = useContext(VideoPlayContext);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>

      <VideoPlay src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'></VideoPlay>
    </>
  );
}
