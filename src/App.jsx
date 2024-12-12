import './App.scss'
import { Nav } from './components/nav/nav.jsx'
import { Header  } from './components/header/header.jsx'
import { ReadMoreSection } from './components/ReadMoreSection/ReadMoreSection.component.jsx'
import { BookTimeSection } from './components/BookTimeSection/BookTimeSection.component.jsx'
import { InstagramSection } from './components/InstagramSection/InstagramSection.component.jsx'

function App() {

  return (
    <>
    <Nav/>
    <Header/>
    <ReadMoreSection/>
    <BookTimeSection/>
    <InstagramSection/>
    </>
  )
}

export default App
