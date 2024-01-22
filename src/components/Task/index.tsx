import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import {
  deleteTask,
  editTask,
  statusModificator
} from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { Button, SaveBtn } from '../../styles'

export type Props = TaskClass

const Task = ({
  title,
  priority,
  status,
  description: descriptionOG,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOG.length > 0) {
      setDescription(descriptionOG)
    }
  }, [descriptionOG])

  function cancelEditing() {
    setIsEditing(false)
    setDescription(descriptionOG)
  }

  function statusModificatorTask(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      statusModificator({
        id,
        done: event.target.checked
      })
    )
  }

  return (
    <S.TaskCard>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.DONE}
          onChange={statusModificatorTask}
        />
        <S.Title>
          {isEditing && <em>Editing: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag paramater="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag paramater="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveBtn
              onClick={() => {
                dispatch(
                  editTask({
                    title,
                    description,
                    priority,
                    status,
                    id
                  })
                ),
                  setIsEditing(false)
              }}
            >
              Save
            </SaveBtn>
            <S.CancelDeleteBtn onClick={cancelEditing}>
              Cancel
            </S.CancelDeleteBtn>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.CancelDeleteBtn onClick={() => dispatch(deleteTask(id))}>
              Delete
            </S.CancelDeleteBtn>
          </>
        )}
      </S.ActionBar>
    </S.TaskCard>
  )
}

export default Task
