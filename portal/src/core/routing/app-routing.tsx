import { Route, Routes } from 'react-router';
import HomepageRouting from '../../modules/home/homepage-routing';
import JustDrawRouting from '../../modules/games/just-draw/just-draw-routing';
import BasicGameRouting from '../../modules/games/basic-game/basic-game-routing';

const AppRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<HomepageRouting />} />
      <Route path='just-draw/*' element={<JustDrawRouting />} />
      <Route path='basic-game/*' element={<BasicGameRouting />} />
    </Routes>
  );
};

export default AppRouting;
