
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
                    <Button element="/login">LogIn</Button>
                    <Button element="/signup">SignUp</Button>
                </div>
            </div>
        </header>
    );
}
