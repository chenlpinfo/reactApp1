import { useSelector } from 'react-redux';
import { selectIsLarge } from '../../store/sliceImage';

export default function ShowIsLarge() {
  // const { isLarge } = useContext(ImageContext);
  const isLarge = useSelector(selectIsLarge);

  return <div>isLarge:{!!isLarge.toString()}</div>;
}
