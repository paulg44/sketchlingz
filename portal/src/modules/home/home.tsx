import { useNavigate } from 'react-router-dom';
import headerImage from '../../assets/images/sketchlingz_header.png.png';
import SharedButton from '../../shared/button/button';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center'>
      <img src={headerImage} alt='main header image' className='border' />
      <div>
        <SharedButton labelKey='Play Games' appearance='primary' onClick={() => navigate('/games')} />
        <SharedButton labelKey='Start Drawing' appearance='primary' onClick={() => navigate('/just-draw')} />
      </div>
    </div>
  );
};

export default Homepage;
