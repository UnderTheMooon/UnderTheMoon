import './App.scss'
import { Header } from './components/header/header.jsx'
import { Content } from './components/main/content.jsx'
import { Footer } from './components/footer/footer.jsx'
import { Nav } from './components/nav/nav.jsx'
import { Button } from './components/button/button.jsx'
function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <Content/>
    <Footer/>
    <Button/>
    </>
  )
}

export default App
