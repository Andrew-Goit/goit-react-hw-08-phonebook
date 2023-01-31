import styled from "styled-components"

export const LogMenu = styled.div`
  display: flex;
  align-items: baseline;
` 
export const Greetings = styled.p`
  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  color: purple;
`
export const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: #444;
  background-color: #fff;
  text-decoration: none;
  margin-left: 60px;
  margin-right: 30px;
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid #888;
  box-shadow: 1px 2px 4px 1px #B7B7B7;
  cursor: pointer;
  transition: background-color 200ms linear, color 200ms linear;
  &:hover {
    background-color: purple;
    color: #eee;

  &.active {
    color: #cc25b0;
  }
`

