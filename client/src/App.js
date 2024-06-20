import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard.jsx';
import Register from './components/auth/register.jsx';
import Login from './components/auth/login.jsx';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
