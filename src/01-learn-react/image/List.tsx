import React from 'react';
import { places } from './data';
import { Place } from './Place';

export function List({ imageSize }: { imageSize: number }) {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} imageSize={imageSize} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
