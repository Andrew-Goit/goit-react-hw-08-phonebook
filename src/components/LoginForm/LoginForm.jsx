import { LoginFormWrap, LoginFormBox, Input, SubmitBtn, RegLink, LinkReg,
  LoginFormTitle, Label } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn, reset } from 'redux/auth/operations';
// import { Link } from 'react-router-dom';
// import { Container } from '../Container.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
      dispatch(reset('All fields must be write in.'));
      return;
    }
    dispatch(
      logIn({
        email,
        password,
      })
    );
    // console.log('LoginFormReset');
    form.reset();
  };

  // console.log('LoginFormComponent ');

  return (
    <LoginFormWrap>
      <LoginFormTitle>Login</LoginFormTitle>
      <LoginFormBox
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Label htmlFor="email">Email</Label>
        <Input type="email" 
          name="email" 
          label="Email"
          placeholder="E-mail"
        
          />
        <Label htmlFor="password">Password</Label> 
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
        />

        <SubmitBtn type="submit">Log In</SubmitBtn>
      </LoginFormBox>
      <RegLink>
        Or <LinkReg to="/goit-react-hw-08-phonebook/register">register now</LinkReg>
      </RegLink>
  </LoginFormWrap>
  );
};