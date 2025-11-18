
import './App.css'
import Card from './components/card.jsx'
import Card2 from './components/Card2.jsx'
import Card3 from './components/Card3.jsx'
import Navbar2 from './components/Navbar2.jsx'



{/* I must import the Card2 component to make sure it shows up*/}


function App() {
 
  return (
    <>
    <Navbar2/>
    {/* I am using the Card2 component here */}

    <div className="card_container">

      <Card2 
      img_src="https://www.bing.com/th?id=OPHS.VRvJ4t%2fnzj%2fbDg474C474&o=5&pid=21.1&w=140&h=200&qlt=100&dpr=1&c=17&pcl=f5f5f5&ustim=1"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={99.23}
      />
       <Card2 
      img_src="https://www.bing.com/th?id=OPHS.nDKh8QhCNEQGpA474C474&o=5&pid=21.1&w=140&h=200&qlt=100&dpr=1&pcl=f5f5f5"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={49.33}
      />
       <Card2 
      img_src="https://www.bing.com/th?id=OPHS.3fqn%2fPx5VRFL6Q474C474&o=5&pid=21.1&w=140&h=200&qlt=100&dpr=1&pcl=f5f5f5"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={99}
      />
       <Card2 
      img_src="https://www.bing.com/th?id=OPHS.kQWG1X%2bZY0C6Pw474C474&o=5&pid=21.1&w=140&h=200&qlt=100&dpr=1&pcl=f5f5f5"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={99}
      />
       <Card2 
      img_src="https://th.bing.com/th?id=OPHS.6KOuNzlKDjQw%2fw474C474&w=150&h=124&o=5&pid=21.1"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={99}
      />
       <Card2 
      img_src="https://th.bing.com/th?id=OPHS.6KOuNzlKDjQw%2fw474C474&w=150&h=124&o=5&pid=21.1"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={99}
      />
       <Card2 
      img_src="https://th.bing.com/th?id=OPHS.6KOuNzlKDjQw%2fw474C474&w=150&h=124&o=5&pid=21.1"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={99}
      />
       <Card2 
      img_src="https://th.bing.com/th?id=OPHS.6KOuNzlKDjQw%2fw474C474&w=150&h=124&o=5&pid=21.1"
      alt="nike image"
      name="John Doe"
      class="12th Grade"
      exam="react_1"
      grade={99}
      />
    </div>
    <div className="card_container">
    <Card3
    src="https://th.bing.com/th?id=OPHS.6KOuNzlKDjQw%2fw474C474&w=150&h=124&o=5&pid=21.1"
    name="Nike Air Max"
    description="Comfortable running shoes"
    price="$120.99"
    />
    </div>
   
    </>
  )
}

export default App
