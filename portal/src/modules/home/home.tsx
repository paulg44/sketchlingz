import SharedButton from '../../shared/button/button';
import { useNavigate } from 'react-router-dom';
import CategorySelect from '../../shared/category/category-select';

const Homepage = () => {
  const navigate = useNavigate();

  const startBasicGame = () => {
    navigate('basic-game');
  };

  // Add icons for title or button?
  return (
    <div>
      <h1>Sketchlingz</h1>
      <div>
        <CategorySelect />
        <h2>Go to basic game</h2>
        <SharedButton labelKey='Play Basic Game' onClick={() => startBasicGame()} appearance='primary' />
      </div>
    </div>
  );
};

export default Homepage;
