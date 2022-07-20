import { useState } from 'react';

export const useCounter = ( initialValue = 0 ) => {
    
    const [ counter, setCounter ] = useState( initialValue );

    const increment = (value = 0) => {
        setCounter( counter + value );
    }
    
    const decrement = (value = 0) => {
        // if (counter === 0) return;
        setCounter( counter - value );
    }
    
    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};



