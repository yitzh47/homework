import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Post from './Post';
import useForm from './useForm';


export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [formValue, setFormValue] = useForm({});
  const [searchParams, setSearchParams] = useSearchParams();

  let skipAmount = searchParams.get("skipAmount");
  let limitAmount = searchParams.get("limitAmount");


  useEffect(() => {

    let query = "";
    if (skipAmount !== null || limitAmount !== null) {
      query += "?";
      if (skipAmount !== null && limitAmount !== null) {
        query += `skipAmount=${skipAmount}&limitAmount=${limitAmount}`;
      }
      else if (skipAmount !== null) {
        query += `skipAmount=${skipAmount}`;
      }
      else if (limitAmount !== null) {
        query += `limitAmount=${limitAmount}`;
      }
    }

    console.log(limitAmount);
    (async () => {
      const response = await fetch(`http://localhost:8080/posts${query}`, {
        credentials: 'include',
      });
      const posts = await response.json();
      setPosts(posts);
    })();
  }, [skipAmount, limitAmount]);



  function handleSubmit(e) {
    e.preventDefault();
    //console.log("Submit")
    (async () => {
      // //console.log(searchParams.skipAmount);
      // const response = await fetch(`http://localhost:8080/posts?skipAmount=${skipAmount}&limitAmount=${limitAmount}`, {
      //   credentials: 'include',
      // });
      // const posts = await response.json();
      // console.log(formValue.skipAmount);
      // console.log(formValue.limitAmount);
      setSearchParams({...formValue});
      //setPosts(posts);
    })();
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="skipAmount">Skip: </label>
          <input id="skip" name="skipAmount" type="number" min="0" max="5" value={formValue.skipAmount} onChange={setFormValue} />
          <label htmlFor="limitAmount">Limit: </label>
          <input id="limitAmount" name="limitAmount" type="number" min="0" max="5" value={formValue.limitAmount} onChange={setFormValue} />
          <button>Submit</button>
        </form>
      </div>
      {posts.map(p => (<Post post={p} />))}
    </div>
  )
}