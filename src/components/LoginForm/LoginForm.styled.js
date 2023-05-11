import styled from "styled-components";

export const Form = styled.form`
  width: 500px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid #00d4ff;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  outline: none;
  height: 30px;

  :focus {
    border-color: #00d4ff;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 6px 8px;
  border: none;
  border-radius: 3px;
  margin-top: 10px;

  :hover {
    background-color: #00d4ff;
  }
`;