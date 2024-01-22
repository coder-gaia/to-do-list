import AddBtn from '../../components/AddButton'
import Sidebar from '../../containers/Sidebar'
import Todolist from '../../containers/Todolist'

const Home = () => (
  <>
    <Sidebar showFilters />
    <Todolist />
    <AddBtn />
  </>
)
export default Home
