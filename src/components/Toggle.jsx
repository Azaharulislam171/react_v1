import {useState} from 'react'

function Toggle(){
 const [toggled,setToggled]=useState(false);

const changeToggle=()=>{
setToggled(!toggled);
}

return(
    <div>
        <button onClick={changeToggle}> {toggled?"toggle":" Already Toggled"} </button>
        {toggled && <p>This is the toggled text!</p>}
    {/* What if I want to hide and show a small text */}
    </div>


);


}
export default Toggle;