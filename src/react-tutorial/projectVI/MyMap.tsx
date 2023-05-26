import mapboxgl from 'mapbox-gl';
import { useEffect, useState } from 'react';
import './MyMap.css';

export function MyMap() {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JlZ2x1by1kb3duZXIiLCJhIjoiY2xmaTZ1ZXE3MGtpYzNzcXBzbGgyZDAzaSJ9.6Yb5TMQespHFFPgexQcjyg';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12', //'mapbox://styles/mapbox/dark-v10',
      center: [111.0026765344604, 24.14456498726897],
      zoom: 14,
    });
  }, []);

  async function myFunction() {
    return 'Hello';
  }

  async function myFunction2() {
    const result = await myFunction();
  }
  myFunction2();

  (async () => {
    const result = await myFunction();
  })();
  useEffect(() => {
    fetch('https://react-tutorial-demo.firebaseio.com/users.json')
      .then((response) => response.json())
      .then((data) => {});
  }, []);

  async function myFunction3() {
    const response = await fetch('https://react-tutorial-demo.firebaseio.com/users.json');
    const data = response.json();
  }
  useEffect(() => {
    myFunction3();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://react-tutorial-demo.firebaseio.com/users.json');
      const data = await response.json();
      // setUsers(data);
    })();
  }, []);

  return (
    <>
      <button id='re-render' onClick={() => setRandom(Math.random())}>
        Re-render
      </button>
      <div id='map'></div>
    </>
  );
}
