import React from 'react';
import DebouncedButton from './DebouncedButton';

export default function DashboardApp() {
  return (
    <>
      <DebouncedButton onClick={() => alert('Spaceship launched!')}> Launch the spaceship</DebouncedButton>
      <DebouncedButton onClick={() => alert('Soup boiled!')}>Boil the soup</DebouncedButton>
      <DebouncedButton onClick={() => alert('Lullaby sung!')}>Sing a lullaby</DebouncedButton>
    </>
  );
}
