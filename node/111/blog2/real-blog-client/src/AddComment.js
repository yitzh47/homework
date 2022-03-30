import { useState } from "react";

export default function AddComment({ id, endCommenting}) {
  const [commentBody, setCommentBody] = useState('');

  const addComment = async e => {
    try {
      const response = await fetch(`http://localhost:8080/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({body: commentBody})
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      endCommenting();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input name="body" value={commentBody} onChange={e => setCommentBody(e.target.value)}/>
      <button onClick={addComment}>add</button>
      <button onClick={endCommenting}>cancel</button>
    </div>
  )
}