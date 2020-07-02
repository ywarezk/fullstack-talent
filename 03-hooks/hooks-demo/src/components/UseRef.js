/**
 * we will demonstrate the use of the hook useRef
 */

import React, { useRef } from 'react';

export default function UseRef() {
    // { current: 'Pigletshvily' => new HTMLInputElement(...) }
    const refObj = useRef('Pigletshvily');

    const handleSubmit = (event) => {
        console.log(refObj.current.value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={refObj} type="text" placeholder="name..." />
            <button>send</button>
        </form>
    )
}