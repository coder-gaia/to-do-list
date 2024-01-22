import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
    resize: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Button = styled.button`
  margin-right: 8px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: ${variables.darkBlue};
  padding: 8px 12px;
`

export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
  padding: 0 40px;
`
export const Title = styled.h2`
  display: block;
  font-weight: bold;
  margin: 40px 40px;
  font-size: 18px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  color: #66666;
  border-color: #666666;
  border-radius: 8px;
  font-weight: bold;
`

export const SaveBtn = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
