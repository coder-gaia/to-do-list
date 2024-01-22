import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Title, Input, SaveBtn } from '../../styles'
import { Formulary, Options, Option } from './styles'
import * as enums from '../../utils/enums/Task'
// import Task from '../../models/Task'
import { register } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.REGULAR)

  const registerTask = (ev: FormEvent) => {
    ev.preventDefault()

    dispatch(
      register({
        title,
        priority,
        status: enums.Status.PENDING,
        description
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>New task</Title>
      <Formulary onSubmit={registerTask}>
        <Input
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          type="text"
          placeholder="title"
        />
        <Input
          as="textarea"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          placeholder="task description"
        />

        <Options>
          <p>Priority</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                onChange={(ev) =>
                  setPriority(ev.target.value as enums.Priority)
                }
                type="radio"
                id={priority}
                defaultChecked={priority === enums.Priority.REGULAR}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>

        <SaveBtn type="submit">Register</SaveBtn>
      </Formulary>
    </MainContainer>
  )
}
export default Form
