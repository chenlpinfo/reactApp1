import React, { useContext } from 'react';
import { ImageContext } from './ImageContext';

export default function ShowIsLarge() {
  const { isLarge } = useContext(ImageContext);

  return <div>isLarge:{!!isLarge.toString()}</div>;
}
