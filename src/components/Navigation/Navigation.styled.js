import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavigationBox = styled.nav`
`
export const StyledLink = styled(NavLink)`
  color: #444;
  font-size: 22px;
  font-weight: 600;
  margin-left: 30px;
  text-decoration: none;
  &.active {
    color: #cc25b0;
  }
` 