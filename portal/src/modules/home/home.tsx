import headerImage from '../../assets/images/sketchlingz_header.png.png';
import SharedButton from '../../shared/button/button';

const Homepage = () => {
  return (
    <div className='flex flex-col items-center'>
      <img src={headerImage} alt='main header image' className='border' />
      <div>
        <SharedButton labelKey='Play Games' />
        <SharedButton labelKey='Just Draw' />
      </div>
    </div>
  );
};

export default Homepage;
