import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { Client } from 'appwrite';
import config from './appwriteConfig';
const Signup = () => {
    const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('660e842b9e1780aced5e');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        businessName: '',
        businessAddress: '',
        businessType: '', // 'reachit' or 'thinkit'
        contactNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Additional validation can be performed here

        // Send form data to backend for signup
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to login page after successful signup
                navigate('/login');
            } else {
                // Handle signup failure, show message to user
            }
        })
        .catch(error => {
            // Handle error, show message to user
        });
    };

    return (
        <div className="auth-container">
            <h2>Sign Up as a Vendor</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label>Business Name:</label>
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />

                <label>Business Address:</label>
                <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleChange} required />

                <label>Business Type:</label>
                <select name="businessType" value={formData.businessType} onChange={handleChange} required>
                    <option value="">Select Type</option>
                    <option value="reachit">Reachit (Customer will visit)</option>
                    <option value="thinkit">Thinkit (Delivery available)</option>
                </select>

                <label>Contact Number:</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                <label>Unique ID:</label>
                <input type="text" name="uniqueId" value={formData.uniqueId} onChange={handleChange} required />

                <label>Vendor Image:</label>
                <input type="file" name="vendorImage"  required />

                <label>Shop Images:</label>
                <input type="file" name="shopImages"  multiple required />
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default Signup;

