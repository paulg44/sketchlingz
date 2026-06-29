import SharedButton from '../../shared/button/button';
import { useNavigate } from 'react-router-dom';

const GamesHome = () => {
  const navigate = useNavigate();

  const startBasicGame = () => {
    navigate('basic-game');
  };

  // Add icons for title or button?
  return (
    <div>
      <div>
        <h2>Go to basic game</h2>
        <SharedButton labelKey='Play Basic Game' onClick={() => startBasicGame()} appearance='primary' />
      </div>
    </div>
  );
};

export default GamesHome;
