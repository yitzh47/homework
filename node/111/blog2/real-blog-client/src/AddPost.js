import './AddPost.css';
import useForm from './useForm';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {
  const [formData, setFormData] = useForm({ title: '', body: '' });
  let navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          
        },

        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form id="addPost" onSubmit={onSubmit}>
      <label>Title:
        <input name="title" value={formData.title} onChange={setFormData} />
      </label>
      <label>Body
        <textarea name="body" value={formData.body} onChange={setFormData}></textarea>
      </label>
      <button>add post</button>
    </form>
  )
}