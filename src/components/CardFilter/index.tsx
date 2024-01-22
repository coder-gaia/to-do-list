import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { filterChanger } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

export type Props = {
  caption: string
  criteria: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ caption, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const isActive = () => {
    const sameCriteria = filter.criteria === criteria
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }

  const taskCounter = () => {
    if (criteria === 'all') return tasks.items.length
    if (criteria === 'priority') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (criteria === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
  }

  const active = isActive()
  const counter = taskCounter()

  const filterer = () => {
    dispatch(
      filterChanger({
        criteria,
        value
      })
    )
  }

  return (
    <S.Card active={active} onClick={filterer}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{caption}</S.Label>
    </S.Card>
  )
}

export default CardFilter
