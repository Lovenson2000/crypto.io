
import React from 'react'
import DashboardNav from '../components/dashboard/DashboardNav';
import SideNav from '../components/dashboard/Sidenav';

export default function Layout({ children }) {
    return (
        <div className="flex h-screen">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="md:flex-grow">
                <DashboardNav />
                {children}
            </div>
        </div>
    );
}