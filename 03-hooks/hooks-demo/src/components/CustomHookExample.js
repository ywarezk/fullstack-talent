/**
 * showing example of custom hooks usage
 */

import React, { useEffect, useState } from 'react';

function useUser() {
    // {firstName: '', dogs: [...]}
    const [user, setUser] = useState(null);

    // some logic to check if the user is signed in
    useEffect(() => {
        const intervalId = setInterval(() => {
            fetch('...').then((user) => {
                setUser(user);
                clearInterval(intervalId);
            })
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return [user, setUser];
}

export function Header() {
    const [user] = useUser()

    return (
        <header>
            <h1>
                {
                    user ? 'Hello Piglet' : 'Hello Guest'
                }
            </h1>
        </header>
    )
}

export function Dogs() {
    const user = useUser()
    
    return (
        <ul>
            {
                user.dogs.map((dog) => {
                    return (
                        <li key={dog.id}>
                            {dog.name}
                        </li>
                    )
                })
            }
        </ul>
    )

}