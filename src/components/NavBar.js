import 'styles/NavBar.scss';
import { Link } from 'react-router-dom';
const NavBar = () => {


  return (
    <nav className='nav-container'>
      <Link to='/home'>
        <div className='nav-logo'>
          Home
      </div>
      </Link>
      <Link to='/items'>
        <div className='nav-logo'>
          Daily
      </div>
      </Link>
      <Link to='/cart'>
        <div className='nav-logo'>
          Charts
      </div>
      </Link>
      <Link to='/confirm'>
        <div className='nav-logo'>
          Currency
      </div>
      </Link>

    </nav>
  );

};

export default NavBar;