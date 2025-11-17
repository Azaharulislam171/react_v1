
import './App.css'
import Card from './components/card.jsx'
import Card2 from './components/Card2.jsx'
import Navbar from './components/Navbar.jsx'
{/* I must import the Card2 component to make sure it shows up*/}


function App() {
 
  return (
    <>
    <Navbar />
    <h1>Hello World</h1>
    <p>Welcome to my React App!</p>
    <Card/>
    {/* I am using the Card2 component here */}

    <div className="card_container">
    <Card2 stu_name={"velasco"} stu_class={"ap cs a"} stu_exam={"reacr"} stu_grade={99}/>
      <Card2 stu_name={"velasco"} stu_class={"ap cs a"} stu_exam={"reacr"} stu_grade={99}/>
        <Card2 stu_name={"velasco"} stu_class={"ap cs a"} stu_exam={"reacr"} stu_grade={99}/>
          <Card2 stu_name={"velasco"} stu_class={"ap cs a"} stu_exam={"reacr"} stu_grade={99}/>
            <Card2 stu_name={"velasco"} stu_class={"ap cs a"} stu_exam={"reacr"} stu_grade={99}/>
    </div>
    
   
    </>
  )
}

export default App
