import { Link } from 'react-router-dom';
import monsterLogo from '../../assets/images/sketchlingz_monster.png.png';
import { useAuthContext } from '../../core/providers/auth-context';
import Login from '../../modules/auth/login';

const SharedSidebar = () => {
  const authContext = useAuthContext();
  if (!authContext) return null;
  const { currentUser, signout } = authContext;
  const isLoggedIn = currentUser !== null;
  return (
    <nav className='fixed top-0 left-0 z-40 w-54 h-full p-4 text-white bg-blue-800 border-r border-gray-300'>
      <div className='h-full flex flex-col items-start justify-between p-4'>
        <div>
          <img src={monsterLogo} alt='Logo' />
          {isLoggedIn ? (
            <>
              <p>{currentUser.displayName}</p>
              <button onClick={signout}>Sign Out</button>
            </>
          ) : (
            <Login />
          )}
        </div>
        <ul className='flex flex-col gap-2'>
          <Link to='/'>Home</Link>
          <Link to='settings'>Settings</Link>
        </ul>
      </div>
    </nav>
  );
};

export default SharedSidebar;
