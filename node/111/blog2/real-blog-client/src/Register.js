import React from 'react'
import useForm from './useForm';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [formData, setFormData] = useForm({ username: '', password: '' });
    let navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            navigate('/');
        }
        catch(error) {
            console.error(error);
        }
    }

  return (
      <form onSubmit={onSubmit}>
          <input id="username" name="username" onChange={setFormData}/>
          <input id="password" type="password" name="password" onChange={setFormData}/>
          <button>register</button>
      </form>
  )
}
