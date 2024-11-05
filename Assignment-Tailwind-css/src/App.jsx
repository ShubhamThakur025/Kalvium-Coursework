import './App.css'
import './index.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import Footer from './components/Footer' 
import ErrorSection from './components/ErrorSection'
function App() {
  return (
    <>
      <NavBar />
      <ErrorSection />
      <Card />
      <Footer />
    </>
  )
}

export default App
