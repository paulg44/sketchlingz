import { Settings } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';

const SettingsRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Settings />} />
    </Routes>
  );
};

export default SettingsRouting;
