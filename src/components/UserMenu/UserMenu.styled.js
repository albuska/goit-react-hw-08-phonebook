import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NameUser = styled.p`
  font-size: 20px;
  color: #ffffff;
`;

export const Button = styled.button`
  font-size: 18px;
  border-radius: 3px;
  border: none;
  background-color: #00d4ff;
  color: #ffffff;
  cursor: pointer;
  padding: 3px 7px;

  :hover {
    background-color: #090979;
  }
`;
