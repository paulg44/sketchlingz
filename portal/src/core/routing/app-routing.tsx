import { Route, Routes } from 'react-router';
import HomepageRouting from '../../modules/home/homepage-routing';
import JustDrawRouting from '../../modules/games/just-draw/just-draw-routing';

const AppRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<HomepageRouting />} />
      <Route path='just-draw/*' element={<JustDrawRouting />} />
    </Routes>
  );
};

export default AppRouting;
