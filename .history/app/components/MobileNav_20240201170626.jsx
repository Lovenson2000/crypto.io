
import { SignOutButton } from '@clerk/nextjs'
import React from 'react'
import { RiShutDownLine } from 'react-icons/ri'
import NavLinks from './dashboard/NavLinks'

function MobileNav() {
    return (
        <div>
            <NavLinks />
            <div className="h-72 w-full rounded-md bg-gray-100 md:block"></div>
            <div className="flex h-[48px] items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none">
                <RiShutDownLine className="w-6 text-lg text-indigo-700" />
                <SignOutButton className="text-[1rem]" />
            </div>
        </div>
    )
}

export default MobileNav