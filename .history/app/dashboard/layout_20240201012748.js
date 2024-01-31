
import React from 'react'
import DashboardNav from '../components/dashboard/DashboardNav';
import SideNav from '../components/dashboard/Sidenav';

export default function Layout({ children }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <DashboardNav />
                {children}
            </div>
        </div>
    );
}