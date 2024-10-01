import React from 'react';
import MenuItem from '@/components/layouts/dashboard/MenuItem';
import { iconMapping, menus } from '@/constants';
import { IconName } from '@/types';
import Link from 'next/link';

interface Props {
    isSidebarActive: boolean;
}

function Sidebar({ isSidebarActive }: Props) {
    return (
        <div className={`flex h-dvh w-64 flex-col p-4 ${!isSidebarActive && 'hidden'}`}>
            <div className="mb-5 flex justify-center">
                <Link href="/" className="btn btn-ghost text-xl">
                    daisyUI
                </Link>
            </div>
            <ul className="menu h-5/6 w-56 overflow-y-auto rounded-box bg-base-200">
                {menus.map(({ icon, name, url }) => (
                    <MenuItem key={name} Icon={iconMapping[icon as IconName]} name={name} url={url} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
