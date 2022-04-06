import React from 'react'
import { useEffect } from 'react'

export default function Logout() {
    useEffect(() => {
        (async () => {
            try {
                let response = await fetch('http://localhost:8080/logout', {
                    credentials: 'include',
                });
                console.log(response);
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

            } catch (error) {
                console.error(error);
            }


        })();
    })

        return (
            <div>Logged out</div>
        )
    }
