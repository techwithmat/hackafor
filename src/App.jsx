import { Header } from './components/Header/Header'
import { Projects } from './components/Projects/Projects'
import { useGetUser } from './hooks/useGetUser'
import GridContainer from './components/Containers/GridContainer'

// CSS Styles
import './styles/index.css'
import './styles/normalize.css'

function App() {
  const { user } = useGetUser()
  return (
    <>
      <Header user={user} />
      <main>
        <GridContainer>
          <Projects />
        </GridContainer>
      </main>
    </>
  )
}

export default App
