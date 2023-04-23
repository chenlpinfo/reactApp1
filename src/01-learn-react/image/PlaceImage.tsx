import { PlaceProps, placeType } from './Place';

export function PlaceImage({ place, imageSize }: PlaceProps) {
  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />;
}

function getImageUrl(place: placeType) {
  return 'https://i.imgur.com/' + place.imageId + 'l.jpg';
}
