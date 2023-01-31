import {RegisterForm} from 'components/RegisterForm/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from 'redux/auth/operations';
import { useEffect } from 'react';
import {RegisterPage, RegisterTitle, RegisterWrap} from './Register.styled';


export default function Register() {
    const error = useSelector(state => state.auth.error);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(reset());
    }, [dispatch]);
  
    if (error) {
      setTimeout(() => {
        dispatch(reset());
      }, 5000);
    }
    console.log('RegisterPage');
  
    return (
      <RegisterPage>
        {error && (
          alert(`${error} Can not register the user`)
        )}
        
        <RegisterTitle>
          Registration
        </RegisterTitle>
        <RegisterWrap>
          <RegisterForm />
        </RegisterWrap>
  
        
      </RegisterPage>
    );
  }