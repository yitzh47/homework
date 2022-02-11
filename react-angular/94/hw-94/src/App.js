import './App.css';
import { useState, useEffect } from 'react';
import LoadAuthors from './LoadAuthors';
import AuthorsBlogPage from './authorsBlogPage';


export default function App() {

  const [authorToLoad, setAuthorToLoad] = useState();




  return (
    <>
     <div id="content">
        <LoadAuthors setAuthorToLoad={setAuthorToLoad} />
     </div>
      
      {authorToLoad && <AuthorsBlogPage authorToLoad={authorToLoad}/> }
    </>
  );

}

