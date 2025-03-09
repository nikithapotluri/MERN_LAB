import React from 'react'
import {observer} from 'mobx-react';
import counterStore from '../store/CounterStore';

const Counter = observer(()=>{
    return(
        <div>
            <h1>MobX Counter</h1>
            <p>Count : {counterStore.count}</p>
            <button onClick={()=>counterStore.increment()}>Increment</button>
            <button onClick={()=>counterStore.decrement()}>Decrement</button>
        </div>
    )
})

export default Counter