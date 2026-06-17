import { Routes, Route, Navigate } from 'react-router-dom';
import GamesHome from './games-home';
import BasicGame from './basic-game/basic-game';

const GamesRouting = () => {
  return (
    <Routes>
      <Route path='' element={<GamesHome />} />
      <Route path='basic-game/*' element={<BasicGame />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default GamesRouting;
