import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBarWrap } from './AppBar.styled';
import {Container} from '../Container.styled'

export const AppBarComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log('AppBarComponent');
  return (
    <Container>
      <AppBarWrap>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarWrap>
    </Container>
  );
};