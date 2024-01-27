
import React from 'react'
import Button from './Button';

export default function Header() {
    return (
        <header className='p-4 bg-slate-100 shadow-lg'>
            <div className="container mx-auto flex items-center justify-between">

                <div className="flex items-center">
                    <h1 className="text-2xl font-semibold">Crypto.<span>io</span></h1>
                </div>

                <div className="flex items-center space-x-4">   
                    <Button element="/login">Log In</Button>
                    <Button element="/signup">Sign Up</Button>
                </div>
            </div>
        </header>
    );
}
