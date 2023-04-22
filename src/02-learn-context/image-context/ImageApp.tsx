import React, { useContext, useState } from 'react';
import { List } from './List';
import { ImageContext } from './ImageContext';
import ShowIsLarge from './ShowIsLarge';

export default function ImageApp() {
  // const [isLarge, setIsLarge] = useState(false);

  const { isLarge, setIsLarge } = useContext(ImageContext);

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
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
