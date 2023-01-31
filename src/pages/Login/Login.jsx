import {LoginForm} from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux/auth/operations';
import { useEffect } from 'react';
import {LoginPage} from './Login.styled';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  if (error) {
    setTimeout(() => {
      dispatch(reset());
    }, 5000);
  }
  console.log('LoginPage');
  return (
    <LoginPage>
      {error && (
        alert(`${error} Can not login the user`) 
      )}
      {/* <LoginTitle>
        Login
      </LoginTitle> */}
      <LoginForm />
    </LoginPage>
  );
}