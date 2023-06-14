import { NavLink } from 'react-router-dom';
import { IProduct } from './IProduct';
import { SuperMarketContext } from './SuperMarketContext';
import { useContext } from 'react';

export default function Navbar() {
  const { cart, setCart } = useContext(SuperMarketContext);

  function getClassName({ isActive, isPending }: any) {
    return isActive ? 'active' : '';
  }
  const cartCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <nav className='navbar'>
        <NavLink to='/' className='nav-brand'>
          SuperM
        </NavLink>
        <ul>
          <li className='nav-item'>
            <NavLink to='/' className={getClassName}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className={getClassName}>
              About us
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/products' className={getClassName}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' className='nav-item nav-cart btn btn-accent'>
              Cart({cartCount})
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
