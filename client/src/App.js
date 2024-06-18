import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/auth/register';  // Adjust path as per your project structure
import Login from './components/auth/login';  // Adjust path as per your project structure
import Dashboard from './components/dashboard/dashboard';  // Adjust path as per your project structure

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Routes>
        </Router>
    );
};

export default App;
