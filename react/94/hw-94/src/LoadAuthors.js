import React from 'react';
import { useState, useEffect } from 'react';

export default function LoadAuthors(props) {

    const setAuthorToLoad = props.setAuthorToLoad;

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const r = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await r.json();
                if (!r.ok) {
                    throw new Error(r.status, r.statusText)
                };
                console.log(users);
                const authors = users.map((user) => {
                    return (
                        <div className="authorOptions" key={user.id} onClick={()=>setAuthorToLoad(user.id)}>
                            <h2>Author: {user.name}</h2>
                            <hr/>
                            <p>Website: {user.website}</p>
                            <h3>Company: {user.company.name}</h3>
                            <p>"{user.company.catchPhrase}"</p>
                        </div>
                    )
                });
                setAuthors(authors);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <>
            {authors}
        </>
    )
}
