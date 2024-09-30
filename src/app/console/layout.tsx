import React from 'react';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout';

function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <DashboardLayout>{children}</DashboardLayout>;
}

export default Layout;
