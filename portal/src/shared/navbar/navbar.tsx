import { Link } from 'react-router-dom';
import monsterLogo from '../../assets/images/sketchlingz_monster.png.png';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 text-white bg-blue-800'>
      <img src={monsterLogo} alt='Logo' className='h-10' />

      <div>
        <button className=''>Sign In</button>

        <ul className='flex space-x-4'>
          <Link to='/'>Home</Link>
          <Link to='settings'>Settings</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
