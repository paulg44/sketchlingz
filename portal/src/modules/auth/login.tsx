import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../core/config/firebase';

interface LoginFormData {
  email: string;
  password: string;
}

type Mode = 'login' | 'create';

const Login = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState<string>('');
  const [mode, setMode] = useState<Mode>('login');

  const onFormSubmit = async (data: LoginFormData) => {
    try {
      setFormError('');
      setFormSubmitting(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.log(error);
      setFormSubmitting(false);
      setFormError('An error occurred while submitting the form. Please try again.');
    }
  };
};

export default Login;
