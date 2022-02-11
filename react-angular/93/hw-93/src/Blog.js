import React from 'react';
import { useState } from 'react';
import Comments from './Comments';

export default function Blog({ id, title, body }) {

    const [comments, setComments] = useState(false);

    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="blogComments">
                <button onClick={() => setComments(!comments)}>{comments ? "Hide" : "Show"} comments</button>
                {comments && <Comments postId={id} />}
            </div>
        </div>
    )
}
