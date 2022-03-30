import './Post.css';
import Comment from './Comment';
import AddComment from './AddComment';
import { useState } from 'react';

export default function Post({ post: { _id, title, body, author, date, comments } }) {
  const [commenting, setCommenting] = useState(false);

  const endCommenting = () => setCommenting(false);

  const content = !commenting ? <button onClick={() => setCommenting(!commenting)}>add comment</button> : <AddComment id={_id} endCommenting={endCommenting}/>;

  return (
    <div className='post'>
      <h2>{title}</h2>
      <h3>by {author} on {new Date(date).toLocaleString()}</h3>
      <div>{body}</div>

      <div className="comments">
        {content}
        {comments?.map(c => (<Comment comment={c} />))}
      </div>
    </div>
  )
}