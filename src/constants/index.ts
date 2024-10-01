import React from 'react';
import HomeIcon from '@/components/icons/HomeIcon';

export const menus = [
    {
        icon: 'home',
        name: 'Dashboard'
    }
];

export const iconMapping: {
    [key in 'home']: React.ElementType;
} = {
    home: HomeIcon
};
