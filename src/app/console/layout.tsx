import React from 'react';
import DashboardNavbar from '@/components/layouts/dashboard/DashboardNavbar';

function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="m-0 flex h-dvh flex-col">
            <DashboardNavbar />
            <div className="flex flex-1 items-stretch">
                <div className="w-52 overflow-y-auto p-4">sidebar</div>
                <div className="flex w-full flex-col overflow-y-auto">
                    <div className="p-4">header</div>
                    <div className="p-4">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
