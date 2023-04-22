import { type } from 'os';
import React from 'react';
import { PlaceImage } from './PlaceImage';

export type PlaceProps = {
  place: placeType;
  imageSize: number;
};

export type placeType = {
  id: number;
  name: string;
  description: string;
  imageId: string;
};
export function Place({ place, imageSize }: PlaceProps) {
  return (
    <>
      <PlaceImage place={place} imageSize={imageSize} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}
