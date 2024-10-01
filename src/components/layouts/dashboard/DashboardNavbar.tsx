import React from 'react';
import UserProfileIcon from '@/components/icons/UserProfileIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';

function DashboardNavbar() {
    return (
        <div className="navbar sticky top-0 bg-base-100 p-4 shadow-xl">
            <div className="flex-none">
                <button className="btn btn-circle btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block size-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block size-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
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

export default DashboardNavbar;
