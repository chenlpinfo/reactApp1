import { createRoot } from 'react-dom/client';
import StoreFront from './StoreFront.js';

function App() {
  return <StoreFront />;
}

createRoot(document.querySelector('#react-root')).render(<App />);
