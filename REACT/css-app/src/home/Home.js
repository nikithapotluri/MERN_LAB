import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        
        <div className='matters'>
        <h1 className='grow'>
                Grow your skills, define your future
        </h1>
        <p>Presenting Academy, the tech school of future.<br /> We teach you the right skills to be prepared for tomorrow</p>

        <div className='btns'>
        <button className='btn'>EXPLORE COURSES</button>
        <button className='btn' style={{'color':'rgb(4, 4, 169)', 'backgroundColor':'rgb(183, 176, 185)'}}>LEARN MORE</button>
        </div>

        </div>

        <div>
            <img  className='image' src="https://static.vecteezy.com/system/resources/previews/051/824/879/non_2x/cozy-cafe-with-candles-on-a-wooden-table-snow-is-falling-outside-the-window-and-lights-are-shining-around-christmas-winter-evening-vertical-picture-stories-photo.jpg" alt='scenary' />
        </div>
    </div>
  )
}

export default Home