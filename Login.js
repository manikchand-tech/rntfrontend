import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate=useNavigate();
    const { setIsLoggedIn } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [loginStatus, setLoginStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/customers/login', formData);
            console.log(response.data);
            setLoginStatus('success');
            setIsLoggedIn(true);
            navigate('/');
        } catch (error) {
            console.error(error.response.data);
            setLoginStatus('failure');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {loginStatus === 'success' && <p>Login successful!</p>}
            {loginStatus === 'failure' && <p>Invalid username or password</p>}
            <form onSubmit={handleSubmit} className="auth-form">
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
