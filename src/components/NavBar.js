import 'styles/NavBar.scss';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = () => {


  return (
    <nav className='nav-container'>
      <Link to='/home'>
        <div className='nav-logo'>
          <HomeIcon />
        </div>
      </Link>
      <div className='nav-logo'>
        <a>
          <StorefrontIcon style={{}}/>
        </a>
      </div>
      <Link to='/cart'>
        <div className='nav-logo'>
          <ShoppingCartIcon /> Cart
        </div>
      </Link>
      <Link to='/confirm'>
        <div className='nav-logo'>
          Login
      </div>
      </Link>

    </nav >
  );

};

export default NavBar;