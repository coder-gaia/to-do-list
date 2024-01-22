import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Task'
import { termChanger } from '../../store/reducers/filter'
import { Button, Input } from '../../styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Search"
              value={term}
              onChange={(ev) => dispatch(termChanger(ev.target.value))}
            />
            <S.Filters>
              <CardFilter
                value={enums.Status.PENDING}
                criteria="status"
                caption="pending"
              />
              <CardFilter
                value={enums.Status.DONE}
                criteria="status"
                caption="done"
              />
              <CardFilter
                value={enums.Priority.URGENT}
                criteria="priority"
                caption="urgent"
              />
              <CardFilter
                value={enums.Priority.IMPORTANT}
                criteria="priority"
                caption="important"
              />
              <CardFilter
                value={enums.Priority.REGULAR}
                criteria="priority"
                caption="regular"
              />
              <CardFilter criteria="all" caption="all" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')} type="button">
            To-do List
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
