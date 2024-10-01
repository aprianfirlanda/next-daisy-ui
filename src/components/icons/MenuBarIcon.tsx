import React from 'react';

interface Props {
    className: string;
}

function MenuBarIcon({ className }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    );
}

export default MenuBarIcon;
