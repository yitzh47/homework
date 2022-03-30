import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {

    let navigate = useNavigate();


    useEffect(() => {
        (async () => {
            try {
                let response = await fetch('http://localhost:8080/logout')
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                navigate('/');
            } catch (error) {
                console.error(error);
            }


        })();
    })

        return (
            <div>Logout</div>
        )
    }
