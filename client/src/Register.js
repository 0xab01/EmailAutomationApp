import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                name,
                email,
                password
            });
            console.log(res.data); // Handle success (store token, redirect, etc.)
        } catch (err) {
            console.error(err.response.data); // Handle error (show error message, clear form, etc.)
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={onChange} required />
                <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} minLength="6" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
