import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Navigation = styled.header`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
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

