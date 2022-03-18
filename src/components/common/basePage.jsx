import React from 'react';
import NavBarComponent from './navbar';

const BasePage = ({ children }) => {
    return (
        <>
            <NavBarComponent />
            {children}
        </>
    )
}

export default BasePage;