import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../core/config/firebase';
import SharedForm from '../../shared/form/shared-form';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const onFormSubmit = async (data: LoginFormData) => {
    try {
      setFormError('');
      setFormSubmitting(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      setFormSubmitting(false);
      setFormError('An error occurred while submitting the form. Please try again.');
    }
  };

  return <SharedForm onFinish={onFormSubmit} name='LoginForm' layout='horizontal' fields={[]} />;
};

export default Login;
