import { LogMenu, Button, Greetings } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if (user === undefined) return;
  const name = user.name[0].toUpperCase() + user.name.slice(1);
//   console.log('UserMenuComponent');
  return (
    <LogMenu>
      <Greetings>Welcome, {name}</Greetings>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </LogMenu>
  );
};