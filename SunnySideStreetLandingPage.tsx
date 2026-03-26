import React, { useState } from 'react';
import './SunnySideStreetLandingPage.css';

const SunnySideStreetLandingPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            // Handle form submission logic
            console.log('Form submitted successfully:', formData);
            setErrors({});
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className='container'>
            <h1>Welcome to Sunny Side Street!</h1>
            <p>Discover the exciting features of our platform:</p>
            <ul>
                <li>Feature 1: Engaging learning materials</li>
                <li>Feature 2: Interactive games and quizzes</li>
                <li>Feature 3: Personalized learning experience</li>
            </ul>
            <p>Benefits of joining us:</p>
            <ul>
                <li>Benefit 1: Enhanced learning outcomes</li>
                <li>Benefit 2: Supportive community</li>
                <li>Benefit 3: Continuous access to resources</li>
            </ul>
            <form onSubmit={handleSubmit} className='contact-form'>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} />
                    {errors.name && <p className='error'>{errors.name}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name='message' value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <p className='error'>{errors.message}</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SunnySideStreetLandingPage;
