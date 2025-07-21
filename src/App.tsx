import './App.css'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import About from './Sections/About/About'
import Home from './Sections/Home/Home'

function App() {

  return (
   <>
      <Header/>
      <main>
        <Home/>

        <About/>

        <Skills/>
      </main>
   </>
  )
}

export default App
