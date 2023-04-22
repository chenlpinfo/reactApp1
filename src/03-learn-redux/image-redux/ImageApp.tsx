import { useDispatch, useSelector } from 'react-redux';
import { selectIsLarge, sliceImageActions } from '../../store/sliceImage';
import { List } from './List';
import ShowIsLarge from './ShowIsLarge';

export default function ImageAppRedux() {
  // const [isLarge, setIsLarge] = useState(false);

  // const { isLarge, setIsLarge } = useContext(ImageContext);

  const dispatch = useDispatch();
  const isLarge = useSelector(selectIsLarge);

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={isLarge}
          onChange={(e) => {
            dispatch(sliceImageActions.setIsLarge(e.target.checked));
            // setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ShowIsLarge />
      <List />
    </>
  );
}
