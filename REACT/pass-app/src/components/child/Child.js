import React from 'react'
function Child(props) {
  return (
    <>  <h2>Info passed by parent: <i>{props.message}</i></h2>  </>
  )
 }
export default Child