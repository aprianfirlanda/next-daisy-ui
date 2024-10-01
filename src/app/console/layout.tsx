'use client';
import React, { useState } from 'react';
import Navbar from '@/components/layouts/dashboard/Navbar';
import Sidebar from '@/components/layouts/dashboard/Sidebar';

function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isSidebarActive, setIsSidebarActive] = useState(true);

    const toggleSidebar = () => setIsSidebarActive((prevState) => !prevState);

    return (
        <div className="m-0 flex h-dvh w-screen">
            <Sidebar isSidebarActive={isSidebarActive} />
            <div className="h-dvh flex-1 overflow-y-auto">
                <Navbar isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}

export default Layout;
