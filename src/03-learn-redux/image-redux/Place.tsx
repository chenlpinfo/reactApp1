import { type } from 'os';
import React from 'react';
import { PlaceImage } from './PlaceImage';

export type PlaceProps = {
  place: placeType;
};

export type placeType = {
  id: number;
  name: string;
  description: string;
  imageId: string;
};
export function Place({ place }: PlaceProps) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}
