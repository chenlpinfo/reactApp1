import { useContext } from 'react';
import { PlaceProps, placeType } from './Place';
import { ImageContext } from './ImageContext';

export function PlaceImage({ place }: PlaceProps) {
  const { isLarge } = useContext(ImageContext);
  const imageSize = isLarge ? 150 : 100;
  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />;
}

function getImageUrl(place: placeType) {
  return 'https://i.imgur.com/' + place.imageId + 'l.jpg';
}
