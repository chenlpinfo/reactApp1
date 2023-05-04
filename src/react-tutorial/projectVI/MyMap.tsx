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
      center: [151.0420473397699, -33.76620085798022],
      zoom: 14,
    });
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
