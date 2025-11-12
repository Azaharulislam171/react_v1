import  styles from './App.css'
import Card from '../src/components/card.jsx'
import Navbar from '../src/components/Navbar.jsx'

function App() {
 

 

  return (
    <>
    <Navbar/>
    <h1> My React Learning path  </h1>
    <p> Azaharul Islam</p>
    <div className={styles.card_container}>
      <Card/>
    </div>
    <Card/>
    <Card/> 
    <Card/>
    </>
  )
}

export default App
