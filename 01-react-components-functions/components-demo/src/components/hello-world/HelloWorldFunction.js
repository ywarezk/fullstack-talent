/**
 * component that displays hello world
 * as Function
 */

import React, {useState} from 'react';

export default function HelloWorldFunction(props) {
    // [message, setMessage]
    const [message, setMessage] = useState('hello');
    
    // [isPShown, setIsPShown]    
    // const pArray = useState(true);
    // const isPShown = pArray[0];
    // const setIsPShown = pArray[1];
    const [isPShown, setIsPShown] = useState(true); 

    const toggleP = () => {
        setIsPShown(!isPShown);
        setMessage(Math.random());
    }

    return (
        <>
            <h1>
                Hello World from function
            </h1>
            {
                isPShown && (
                    <p>
                        {
                            props.message
                        }
                    </p>
                )
            }            
            <button onClick={toggleP}>
                Toggle P {message}
            </button>
        </>
    )
}