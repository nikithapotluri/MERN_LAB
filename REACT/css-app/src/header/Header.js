import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css'

function Header() {
  return (
    <div className='navbar'>
        <div>
            <img alt="Quest" src="data:image/png;base64,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" />
        </div>
        <div>
        <ul className='navbar list-nav'>
                <li className='list'><a className='listword' style={{'color':'rgb(8, 27, 199)', textDecoration:'none'}} href="App.js">Home</a></li>
                <li className='list'><a className='listword' style={{'color':'rgb(8, 27, 199)', textDecoration:'none'}} href="App.js">About</a></li>
                <li className='list'><a className='listword' style={{'color':'rgb(8, 27, 199)', textDecoration:'none'}} href="App.js">Courses</a></li>
                <li className='list'><a className='listword' style={{'color':'rgb(8, 27, 199)', textDecoration:'none'}} href="App.js">Pages</a></li>
                <li className='list'><a className='listword' style={{'color':'rgb(8, 27, 199)', textDecoration:'none'}} href="App.js">Blog</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Header