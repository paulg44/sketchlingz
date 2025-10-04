import { Route, Routes } from 'react-router';
import HomepageRouting from '../../modules/home/homepage-routing';

const AppRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<HomepageRouting />} />
    </Routes>
  );
};

export default AppRouting;
