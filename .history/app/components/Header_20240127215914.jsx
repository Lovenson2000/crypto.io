
import React from 'react'
import Button from './Button';

export default function Header() {
    return (
        <header className='p-4 shadow-lg'>
            <div className="container mx-auto flex items-center justify-between">

                <div className="flex items-center">
                    <span className="text-xl font-semibold">Your Website</span>
                </div>

                <div className="flex items-center space-x-4">   
                    <Button element="/login">Log In</Button>
                    <Button element="/signup">Sign Up</Button>
                </div>
            </div>
        </header>
    );
}
