import React from 'react';
import UserProfileIcon from '@/components/icons/UserProfileIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';
import Link from 'next/link';
import MenuBarIcon from '@/components/icons/MenuBarIcon';
import MenuEllipsisIcon from '@/components/icons/MenuEllipsisIcon';
import CloseIcon from '@/components/icons/CloseIcon';

interface Props {
    isSidebarActive: boolean;
    toggleSidebar: () => void;
}

function Navbar({ isSidebarActive, toggleSidebar }: Props) {
    return (
        <div className="navbar sticky top-0 bg-base-100 p-4 shadow-xl">
            <div className="flex-none">
                <div className="tooltip tooltip-right hidden md:block" data-tip={isSidebarActive ? 'Close Sidebar' : 'Open Sidebar'}>
                    <button className="btn btn-circle btn-ghost" onClick={toggleSidebar}>
                        {isSidebarActive ? <CloseIcon className="inline-block size-5 stroke-current" /> : <MenuBarIcon className="inline-block size-5 stroke-current" />}
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <Link href="/" className={`btn btn-ghost ${isSidebarActive && 'hidden'} text-xl`}>
                    daisyUI
                </Link>
            </div>
            <div className="flex-none">
                <div className="tooltip tooltip-bottom hidden md:block" data-tip="Profile">
                    <button className="btn btn-circle btn-ghost ">
                        <UserProfileIcon className="size-6" />
                    </button>
                </div>
                <div className="tooltip tooltip-bottom hidden md:block" data-tip="Logout">
                    <button className="btn btn-circle btn-ghost">
                        <LogoutIcon className="size-6" />
                    </button>
                </div>
                <div className="dropdown dropdown-end md:hidden">
                    <button tabIndex={0} className="btn btn-circle btn-ghost">
                        <MenuEllipsisIcon className="inline-block size-5 stroke-current" />
                    </button>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] mt-4 w-36 rounded-box bg-base-100 p-2 shadow">
                        <li>
                            <button className="btn btn-ghost">
                                <UserProfileIcon className="size-6" />
                                Profile
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-ghost">
                                <LogoutIcon className="size-6" />
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
