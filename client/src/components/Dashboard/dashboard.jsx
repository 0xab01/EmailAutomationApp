import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import EmailComposer from './EmailComposer/EmailComposer.jsx';
import FileUpload from './FileUpload/Fileupload.jsx';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <EmailComposer />
                <FileUpload />
            </div>
        </div>
    );
};

export default Dashboard;
