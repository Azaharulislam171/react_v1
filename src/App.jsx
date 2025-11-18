
import './App.css'
import Card from './components/card.jsx'
import Card2 from './components/Card2.jsx'
import Navbar2 from './components/Navbar2.jsx'



{/* I must import the Card2 component to make sure it shows up*/}


function App() {
 
  return (
    <>
    <Navbar2/>
    <h1>Hello World</h1>
    <p>Welcome to my React App!</p>
    <Card/>
    {/* I am using the Card2 component here */}

    <div className="card_container">

      <Card2 
      img_src="https://th.bing.com/th?id=OPHS.6KOuNzlKDjQw%2fw474C474&w=150&h=124&o=5&pid=21.1"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={99}
      />
    </div>
    
   
    </>
  )
}

export default App
