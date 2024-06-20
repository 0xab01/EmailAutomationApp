import React, { useState } from 'react';
import axios from 'axios';
import './emailcomposer.css';

const EmailComposer = () => {
    const [emailContent, setEmailContent] = useState('');
    const [generatedContent, setGeneratedContent] = useState('');

    const handleChange = (e) => {
        setEmailContent(e.target.value);
    };

    const generateEmail = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/generate-email', { prompt: emailContent });
            setGeneratedContent(res.data.generatedText);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="email-composer">
            <h3>Compose Email</h3>
            <textarea
                value={emailContent}
                onChange={handleChange}
                placeholder="Write your email here..."
            ></textarea>
            <button onClick={generateEmail}>Generate with AI</button>
            <textarea
                value={generatedContent}
                readOnly
                placeholder="Generated email content will appear here..."
            ></textarea>
        </div>
    );
};

export default EmailComposer;
