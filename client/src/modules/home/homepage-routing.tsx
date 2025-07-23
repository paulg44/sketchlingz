import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

const HomepageRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
};

export default HomepageRouting;
