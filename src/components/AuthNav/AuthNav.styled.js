import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #444;
  font-size: 22px;
  font-weight: 600;
  margin-left: 50px;
  margin-right: 10px;
  text-decoration: none;
  &.active {
    color: #cc25b0;
  }
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin-right: 20px;
`;