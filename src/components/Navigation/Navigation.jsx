import { NavigationBox, StyledLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
//   console.log('NavigationComponent');
  return (
    <NavigationBox>
      <StyledLink to="/goit-react-hw-08-phonebook/">Home</StyledLink>
      {isLoggedIn && (
        <StyledLink to="/goit-react-hw-08-phonebook/contacts">Contacts</StyledLink>
      )}
    </NavigationBox>
  );
};