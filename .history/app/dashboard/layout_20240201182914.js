"use client";
"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import DashboardNav from '../components/dashboard/DashboardNav';
import SideNav from '../components/dashboard/Sidenav';

export default function Layout({ children }) {
    const {router} = useRouter();
    const param = router;
    console.log(router);
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="md:flex-grow p-4">
                <DashboardNav param={param} />
                {children}
            </div>
        </div>
    );
}