import {Nav, StyledNavLink} from './AuthNav.styled'


export const AuthNav = () => {
  // console.log('AuthNavComponent');
  return (
    <Nav>
      <StyledNavLink to="/goit-react-hw-08-phonebook/register">
        Register
      </StyledNavLink>
      <StyledNavLink to="/goit-react-hw-08-phonebook/login">
        Log In
      </StyledNavLink>
    </Nav>
  );
};