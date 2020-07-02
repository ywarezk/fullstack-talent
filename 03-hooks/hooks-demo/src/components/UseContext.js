/**
 * Demonstrate usage of context
 * 
 * context holds data, setData
 * context wraps components part of the tree
 * the components that are wrapped by the context can access the data
 * 
 * context - configuration
 */

import React, {createContext, useContext, useState} from 'react';

const Message = createContext('stam hello');

export function TilFajar() {
    const [message, setMessage] = useState('hello from TilFajar')
    return (
        <Message.Provider value={ {message, setMessage} }>
            <div>
                <Fajar />
            </div>
        </Message.Provider>
        
    )
}

export function Fajar() {
    return (
        <div>
            <Child />
        </div>
    )
}

export function Child() {
    return (
        <div>
            <GrandChild />
        </div>
    )
}

export function GrandChild() {
    const contextValue = useContext(Message);
    return (
        <div>
            <h1>
                Hello TilFajar {contextValue.message}
            </h1>
            <button onClick={() => contextValue.setMessage('newValue')}>
                Change
            </button>
        </div>
    )
}




