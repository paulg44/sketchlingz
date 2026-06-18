import { Route, Routes } from 'react-router';
import HomepageRouting from '../../modules/home/home-routing';
import JustDrawRouting from '../../modules/just-draw/just-draw-routing';
import GamesRouting from '../../modules/games/games-routing';
import SettingsRouting from '../../modules/settings/settings-routing';
import AuthRouting from '../../modules/auth/auth-routing';

const AppRouting = () => {
  return (
    <Routes>
      <Route path='auth/*' element={<AuthRouting />} />
      <Route path='*' element={<HomepageRouting />} />
      <Route path='games/*' element={<GamesRouting />} />
      <Route path='just-draw/*' element={<JustDrawRouting />} />
      <Route path='settings/*' element={<SettingsRouting />} />
    </Routes>
  );
};

export default AppRouting;
