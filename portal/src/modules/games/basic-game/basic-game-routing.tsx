import { Navigate, Routes, Route } from 'react-router-dom';
import BasicGame from './basic-game';

const BasicGameRouting = () => {
  return (
    <Routes>
      <Route path='' element={<BasicGame />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default BasicGameRouting;
