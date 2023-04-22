import { useDispatch, useSelector } from 'react-redux';
import { selectIsPlaying, sliceVideoPlayActions } from '../../store/sliceVideoPlay';
import { VideoPlay } from './VideoPlay';

export default function VideoPlayApp() {
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);

  return (
    <>
      <button onClick={() => dispatch(sliceVideoPlayActions.setIsPlaying(!isPlaying))}>{isPlaying ? 'Pause' : 'Play'}</button>

      <VideoPlay src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'></VideoPlay>
    </>
  );
}
