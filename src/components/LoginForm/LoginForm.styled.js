import styled from "styled-components";
import { Link } from 'react-router-dom';


export const LoginFormWrap = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
export const LoginFormTitle = styled.h2`
  margin-top: 0px;
`

export const LoginFormBox = styled.form`
  display: block;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`
export const Label = styled.label`
  font-weight: 500;
  margin-top: 30px;
  display: block;
  text-align: start;
`

export const Input = styled.input`
margin-top: 30px;
height: 40px;
font-size: 18px;
width: 100%;
border-radius: 5px;
border: 1px solid #999;
&:focus {
    outline: 2px solid purple;
}
`
export const SubmitBtn = styled.button`
  margin-top: 40px;
  height: 40px;
  width: 200px;
  font-size: 18px;
  color: #000;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #e5c7d5;
  box-shadow: 1px 2px 4px 1px #B7B7B7;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active,
    :hover {
      color: white;
      background-color: purple;
`

export const RegLink = styled.div`
  margin-top: 30px;
  font-size: 18px;
  text-align: center;
`;

export const LinkReg = styled(Link)`
  color: purple;
`

