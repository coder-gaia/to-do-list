import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles/'
import { RootReducer } from '../../store'

const Todolist = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filteringTasks = () => {
    let filteredTasks = items
    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )
      if (criteria == 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criteria == 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }
      return filteredTasks
    } else {
      return items
    }
  }

  const showFilteredTasks = (amount: number) => {
    let msg = ''
    const complement =
      term !== undefined && term.length > 0 ? `and "${term}"` : ''

    if (criteria === 'all') {
      msg = `${amount} tasks were found as: all ${complement}`
    } else {
      msg = `${amount} task was(were) found as: "${`${criteria}=${value}`}" ${complement}`
    }
    return msg
  }

  const tasks = filteringTasks()
  const message = showFilteredTasks(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Todolist
