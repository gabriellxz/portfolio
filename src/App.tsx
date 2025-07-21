import './App.css'
import Header from './components/Header/Header'
import Skills from './Sections/Skills/Skills'
import About from './Sections/About/About'
import Home from './Sections/Home/Home'
import Projects from './Sections/Projects/Projects'
import Footer from './Sections/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />

        <About />

        <Skills />

        <Projects />

        <Footer />
      </main>
    </>
  )
}

export default App
