import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate  = useNavigate()
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <button onClick={()=>navigate(-1)}> Go Back to Home</button>
        </div>
    );
};

export default PageNotFound;