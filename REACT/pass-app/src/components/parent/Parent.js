import React, { useState } from 'react'
import Child from '../child/Child'
import 'bootstrap/dist/css/bootstrap.css'

function Parent() {

    const [message, setMessage] = useState("I am Nikitha (22501A05F0)");
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' >
        <h2 className='m-5 rounded border border-dark' style={{'width':'200px','color':'blueviolet', padding: "10px"}}>Parent Component</h2>
        <br />
        <Child data={message} />

    </div>
  )
}

export default Parent