import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Task'
import { Button } from '../../styles'

export type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  paramater: 'status' | 'priority'
}

function returnBgColor(props: TagProps): string {
  if (props.paramater === 'priority') {
    if (props.priority === enums.Priority.URGENT) return variables.red
    if (props.priority === enums.Priority.IMPORTANT)
      return variables.yellowStrong
  } else {
    if (props.status === enums.Status.PENDING) return variables.yellow
    if (props.status === enums.Status.DONE) return variables.green
  }
  return '#aaa'
}

export const TaskCard = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  background-color: ${(props) => returnBgColor(props)};
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 16px;
`

export const Description = styled.textarea`
  display: block;
  width: 100%;
  color: #8b8b8b;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const CancelDeleteBtn = styled(Button)`
  background-color: ${variables.red};
`
