import React from 'react';
import DashboardNavbar from '@/components/layouts/dashboard/DashboardNavbar';

function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <DashboardNavbar />
            {children}
        </>
    );
}

export default DashboardLayout;
