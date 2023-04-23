import { useState } from 'react';
import { VideoPlay } from './VideoPlay';

export default function VideoPlayApp() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>

      <VideoPlay isPlaying={isPlaying} src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'></VideoPlay>
    </>
  );
}
