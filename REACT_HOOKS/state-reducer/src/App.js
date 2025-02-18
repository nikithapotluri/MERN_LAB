import React, {useState, useReducer} from 'react'
const reducer = (state, action) =>{
  switch (action.type){
    case "increment":
      return {count: state.count+1};
    case "decrement":
      return {count: state.count-1};
    default:
      return state;
  }
}
function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <div style={{'display':'flex', 'gap':'20px'}}>
      <h2>Counter using useState() : {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>

      <h2>Counter using useReducer() : {state.count}</h2>
      <button onClick={()=> dispatch({type: "increment"})}>Increment</button>
      <button onClick={()=> dispatch({type: "decrement"})}>Decrement</button>
    </div>
  )
}
export default App