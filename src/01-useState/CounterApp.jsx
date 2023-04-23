import { useState } from 'react';

export const CounterApp = () => {

    const [ state, setCounter] = useState({
        
        count1: 0,
        count2: 10,
        count3: 20,
        
    });
    
    const { count1, count2, count3 } = state;

  return (
    <>
        <h1>Counter: { count1 }</h1>
        <h1>Counter: { count2 }</h1>
        <h1>Counter: { count3 }</h1>

        <hr />

        <button 
            className='btn' 
            onClick={ 
                () => setCounter({
                    ...state,
                    count1: count1 + 1,
                }) 
            }>+1
        </button>

    </>
  )
}
