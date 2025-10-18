import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';

const HomepageRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default HomepageRouting;
