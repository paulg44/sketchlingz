const Navbar = () => {
  return (
    <nav>
      <div className=''>
        <img src='/logo.png' alt='Logo' className='h-8 w-8' />
      </div>
      <div className=''>
        <button>Sign In</button>
      </div>
      <div className='navShortcuts'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
