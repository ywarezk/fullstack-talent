/**
 * demo of useEffect hook
 */

import React, {useEffect, useState} from 'react';

export default function UseEffectExample({stamBoolean}) {
    const [sweetness, setDog] = useState(true);

    // componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log('this will be called after render');
    })

    // componentDidMount
    useEffect(() => {
        console.log('this will be called after mount');
    }, []);

    // componentDidMount + componentDidUpdate if we have a change in stamBoolean
    useEffect(() => {
        console.log('this will be called after render if stamBoolean is changed');        
    }, [stamBoolean]);

    // error this will run infinite amount of time
    // loop
    // componentDidUpdate
    //     if ...    
    //         this.setState
    useEffect(() => {
        setDog(!sweetness);
    }, [sweetness]);

    // componentWillUnmount + unmount for every render for the previous render
    // componentDidMount + componentWillUnmount , []
    // componentDidMount + componentDidUpdate + unmount for every render the previous render , no array
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Hello piglet!');
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    })

    return (
        <h1>
            Hello world
        </h1>
    )
}