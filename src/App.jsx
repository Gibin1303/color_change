
import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor] = useState("white")

  return (

    <>
<div className='outer'>
      <div style={{backgroundColor:color}} className='box'></div>
</div>  
<div className='container'>


  <button onClick={()=> setColor("blue")} className='btn btn-info me-2'>blue</button>
  <button onClick={()=> setColor("red")} className='btn btn-danger  me-2'>red</button>
  <button onClick={()=> setColor("green")} className='btn btn-success  me-2'>green</button>
  <button onClick={()=> setColor("yellow")} className='btn btn-warning  me-2'>yellow</button>
</div>  

</>
  )
}

export default App
