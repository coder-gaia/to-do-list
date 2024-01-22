import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

export const Circle = styled(Link)`
  background-color: ${variables.green};
  color: #fff;
  position: fixed;
  bottom: 40px;
  height: 64px;
  width: 64px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
