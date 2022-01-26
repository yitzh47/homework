import React from 'react';
import { useState, useEffect } from 'react';
import Blog from './Blog';

export default function AuthorsBlogPage({ authorToLoad }) {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
                const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${authorToLoad}`)
                const usersBlogs = await r.json();
                if (!r.ok) {
                    throw new Error(r.status, r.statusText)
                }
                setBlogs(usersBlogs);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [authorToLoad]);


    return <>
        {blogs.map((blog) => { return <Blog key={blog.id} id={blog.id} title={blog.title} body={blog.body}/> })}
    </>;
}
