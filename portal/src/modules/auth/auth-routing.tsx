import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from '../../core/providers/auth-context';
import Login from './login';

const AuthRouting = () => {
  const auth = useAuthContext();
  if (auth?.currentUser) return <Navigate to='/' replace />;
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='*' element={<Navigate to='/auth' replace />} />
    </Routes>
  );
};

export default AuthRouting;
