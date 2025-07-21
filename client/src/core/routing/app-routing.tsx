import { Route, Routes } from 'react-router';
import Homepage from '../../modules/home/Homepage';

const AppRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
};

export default AppRouting;
