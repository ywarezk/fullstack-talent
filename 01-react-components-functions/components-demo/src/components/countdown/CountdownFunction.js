/**
 * Function component
 * countdown 5..4..3..2..1
 */

import React, { useState, useEffect } from 'react';

export default function CountdownFunction() {
    const [counter, setCounter] = useState(5);

    // componentDidMount + componentDidUpdate
    useEffect(() => {
        setTimeout(() => {
            setCounter(counter - 1)
        }, 1000);
    }, [counter])

    return (
        <div>
            <h1>Countdown function</h1>
            <p>
                {counter}
            </p>
        </div>
    )
}