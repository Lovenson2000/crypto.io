
import React from 'react'
import Button from './Button';

export default function Header() {
    return (
        <header className='p-4'>
            <div class="container mx-auto flex items-center justify-between">

                <div class="flex items-center">
                    <span class="text-xl font-semibold">Your Website</span>
                </div>

                <div class="flex items-center space-x-4">   
                    <Button element="/login">Log In</Button>
                    <Button element="/signup">Sign Up</Button>
                </div>
            </div>
        </header>
    );
}
