import { RegisterBox, SubmitBtn, Input, Label, RegisterWrap, LogLink, LinkLog, Notation } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register, reset } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (name === '' || email === '' || password === '') {
      dispatch(reset('All fields must be write in!'));
      return;
    }
    if (password.length < 7) {
      dispatch(reset('Password must be at least 7 characters long'));
      return;
    }
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

//   console.log('RegisterFormComponent');

  return (
    <RegisterWrap>
      <RegisterBox
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Label htmlFor="name">Name</Label>
        <Input label="Username" type="text" name="name" placeholder="Name"/>
        <Label htmlFor="email">Email</Label>
        <Input label="Email" type="email" name="email" placeholder="E-mail"/>
        <Label htmlFor="password">Password</Label>
        <Input label="Password" type="password" name="password" placeholder="Password"/>
        <Notation>Your password must be 7-20 characters long, contain letters and
          numbers, and must not contain spaces and special characters.</Notation>
        <SubmitBtn type="submit">Register</SubmitBtn>
      </RegisterBox>
      <LogLink>
        Or if you already have an account <LinkLog to="/goit-react-hw-08-phonebook/login">log in</LinkLog>
      </LogLink>
    </RegisterWrap>
  );
};