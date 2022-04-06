import React from 'react'
import useForm from './useForm';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [ formValue, setFormValue ] = useForm({username: '', password: ''});
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValue)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            console.log(response);

            navigate('/');
        }
        catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <input id="username" name="username" onChange={setFormValue}/>
            <input id="password" type="password" name="password" onChange={setFormValue}/>
            <button>login</button>
            <a href="/register">register here</a>
        </form>
    )
}
