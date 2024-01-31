
import React from 'react'
import SideNav from '../components/dashboard/Sidenav';

export default function Layout({children}) {
  return (
    <div>
        <SideNav />
        {children}
    </div>
  );
}