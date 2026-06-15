import { Routes, Route, Navigate } from 'react-router-dom';
import GamesHome from './games-home';

const GamesRouting = () => {
  return (
    <Routes>
      <Route path='' element={<GamesHome />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default GamesRouting;
