import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

const CustomerSignup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        location: '',
        preferences: '' // Optional field for favorite items or interests
    });
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        var errmsg;
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/customers/signup', formData);
            console.log(response.status);
            setAlertMessage('Signup successful!');
            // Clear form data after successful signup
            setFormData({
                name: '',
                username: '',
                email: '',
                password: '',
                location: '',
                preferences: ''
            });

            navigate('/Login')
        } catch (error) {
           
           
            console.error(error.response.data);
            if (error.response.status === 409 && error.response.data === 'Email already registered') {
                setAlertMessage('Email is already registered.');
            } else if (error.response.status === 409 && error.response.data === 'Username already taken') {
                setAlertMessage('Username is already taken.');
            } else {
                setAlertMessage('Signup failed. Please try again.');
            }

    }};

    return (
        <div className="auth-container">
            <h2>Customer Sign Up</h2>
            {alertMessage && <p className="alert">{alertMessage}</p>}
            <form onSubmit={handleSubmit} className="auth-form">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Username:</label><br />
                <input type="text" name="username" value={formData.username} onChange={handleChange} /><br />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label>Location:</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} />

                <label>Preferences (Optional):</label>
                <textarea name="preferences" value={formData.preferences} onChange={handleChange} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default CustomerSignup;
