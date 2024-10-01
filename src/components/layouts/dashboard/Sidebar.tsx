import React from 'react';
import MenuItem from '@/components/layouts/dashboard/MenuItem';
import { iconMapping, menus } from '@/constants';
import { IconName } from '@/types';

function Sidebar() {
    return (
        <div className="flex h-dvh w-64 flex-col p-4">
            <div className="mb-5 flex justify-center">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <ul className="menu h-4/5 w-56 overflow-y-auto rounded-box bg-base-200">
                {menus.map(({ icon, name }) => (
                    <MenuItem key={name} Icon={iconMapping[icon as IconName]} name={name} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
