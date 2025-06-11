// components/Loader.js
import React from 'react';
import { LineSpinner } from 'ldrs/react';
import { useSelector } from 'react-redux';
import 'ldrs/react/LineSpinner.css';

const Loader = () => {
    const isLoading = useSelector((state) => state.loader.isLoading);

    if (!isLoading) return null;

    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', zIndex: 9999 }}>
            <LineSpinner
                size={60}
                speed={1}
                stroke={5}
                color='#e55a3a'
            />
        </div>
    );
};

export default Loader;
