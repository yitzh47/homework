import React from 'react';
import { useState, useEffect } from 'react';

export default function Comments({postId}) {

    const [cmmnts, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                const comments = await r.json();
                if (!r.ok) {
                    throw new Error(r.status, r.statusText)
                }
                setComments(comments.map((comment) => {
                    return (
                        <div className="comment" key={comment.id}>
                            <h5>{comment.email}</h5>
                            <p>{comment.body}</p>
                        </div>
                    )
                }));
                
            } catch (e) {
                console.log(e);
            }
        })();
    }, [postId]);

    return <>{cmmnts}</>;
}
