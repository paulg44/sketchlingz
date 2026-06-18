import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Input, Button } from 'antd';
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
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      } else {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
      }
    } catch (error) {
      console.log(error);
      setFormSubmitting(false);
      setFormError('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div>
      <h2>{mode === 'login' ? 'Sign In' : 'Create Account'}</h2>
      <Form layout='vertical' onFinish={onFormSubmit} disabled={formSubmitting}>
        <Form.Item name='email' label='Email' rules={[{ required: true, message: 'Email is required' }]}>
          <Input type='email' placeholder='Enter your email' />
        </Form.Item>
        <Form.Item name='password' label='Password' rules={[{ required: true, message: 'Password is required' }]}>
          <Input.Password placeholder='Enter your password' />
        </Form.Item>
        {formError && <p className='text-red-600 mb-4'>{formError}</p>}
        <Form.Item>
          <Button type='primary' htmlType='submit' loading={formSubmitting}>
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </Form.Item>
      </Form>
      <button onClick={() => setMode(mode === 'login' ? 'create' : 'login')}>
        {mode === 'login' ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
      </button>
    </div>
  );
};

export default Login;
