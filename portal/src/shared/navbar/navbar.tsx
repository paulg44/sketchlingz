import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='border-b-amber-600 display flex items-center justify-between border-b-2 bg-gray-800 p-4 text-white'>
      <img src='/logo.png' alt='Logo' className='h-8 w-8' />

      <div>
        <button className=''>Sign In</button>

        <ul className='flex space-x-4'>
          <Link to='/'>Home</Link>
          <Link to='just-draw'>Draw</Link>
          <Link to='games'>Games</Link>
          <Link to='settings'>Settings</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
