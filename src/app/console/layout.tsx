import React from 'react';
import DashboardNavbar from '@/components/layouts/dashboard/DashboardNavbar';
import DashboardSidebar from '@/components/layouts/dashboard/DashboardSidebar';

function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="m-0 flex h-dvh w-screen">
            <DashboardSidebar />
            <div className="h-dvh flex-1 overflow-y-auto">
                <DashboardNavbar />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}

export default Layout;
