import React from 'react';
import Navbar from '@/components/layouts/dashboard/Navbar';
import Sidebar from '@/components/layouts/dashboard/Sidebar';

function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="m-0 flex h-dvh w-screen">
            <Sidebar />
            <div className="h-dvh flex-1 overflow-y-auto">
                <Navbar />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}

export default Layout;
