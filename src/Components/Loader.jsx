import React, { useState, useEffect } from 'react';
import './style.css';
import Loader from './Loader';

const LoaderWrapper = ({ children }) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
            console.log('Loader hidden');
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return <>{showLoader ? <Loader /> : children}</>;
};

export default LoaderWrapper;
