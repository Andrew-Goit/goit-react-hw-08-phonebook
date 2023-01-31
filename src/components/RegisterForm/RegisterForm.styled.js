import styled from "styled-components";
import { Link } from 'react-router-dom';


export const RegisterBox = styled.form`
  max-width: 450px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  // border: 1px solid #333;
  border-radius: 5px;
  // background-color: #FAF7F5;
`
 
export const Input = styled.input`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 5px 10px;
  height: 36px;
  border: 1px solid #888;
  border-radius: 5px;
  &:focus-visible {
    outline: 2px solid purple;
}
`
export const Label = styled.label`
  font-weight: 500;
`
export const Notation = styled.p`
  font-size: 14px;
`

export const SubmitBtn = styled.button`
  width: 120px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #aaa;
  background-color: #e5c7d5;
  box-shadow: 1px 2px 4px 1px #B7B7B7;
  color: #333;
  cursor: pointer;
  transition: background-color 200ms linear, color 200ms linear;
  &:hover {
    background-color: purple;
    color: #eee;
  }
`
export const LogLink = styled.div`
  margin-top: 30px;
  font-size: 18px;
  text-align: center;
`; 

export const LinkLog = styled(Link)`
  color: purple;
`


export const RegisterWrap = styled.div`

`