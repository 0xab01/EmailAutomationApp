import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Email Automation</h2>
            <ul>
                <li>Home</li>
                <li>Compose Email</li>
                <li>Upload Email List</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;
