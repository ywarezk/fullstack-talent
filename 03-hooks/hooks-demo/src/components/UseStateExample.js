/**
 * component that use useState hook example
 */

import React, {useState} from 'react';

export default function UseStateExample() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleIsVisible = () => {
        // isVisible = false
        setIsVisible(false);
    }

    return (
        <div>
            <h1>Hello State</h1>            
            <button onClick={toggleIsVisible}>
                toggle is visible
            </button>
        </div>
    )
}