import { Navigate, Route, Routes } from 'react-router-dom';
import JustDraw from './just-draw';

const JustDrawRouting = () => {
  return (
    <Routes>
      <Route path='' element={<JustDraw />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default JustDrawRouting;
