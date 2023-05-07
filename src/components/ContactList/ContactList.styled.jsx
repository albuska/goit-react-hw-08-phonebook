import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 7px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #090979;
  color: #ffffff;

  :hover {
    background-image: radial-gradient(
      circle,
      rgba(174, 238, 221, 1) 0%,
      rgba(148, 177, 233, 0) 100%
    );
  }
`;
