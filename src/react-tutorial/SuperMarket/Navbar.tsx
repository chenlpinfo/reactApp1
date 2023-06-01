import { NavLink } from 'react-router-dom';
import { IProduct } from './IProduct';

export default function Navbar(props: { cart: IProduct[] }) {
  function getClassName({ isActive, isPending }: any) {
    return isActive ? 'active' : '';
  }

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
              Cart(0)
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
