import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;

  &.active {
    color: #00d4ff;
    border-bottom: 1px solid #00d4ff;
  }

  :not(:last-child) {
    margin-right: 100px;
  }
`;

