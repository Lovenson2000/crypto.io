
import React from 'react'

export default function Header() {
    return (
        <header className='p-4 text-white'>
            <div class="container mx-auto flex items-center justify-between">

                <div class="flex items-center">
                    <span class="text-xl font-semibold">Your Website</span>
                </div>
                <div class="flex items-center space-x-4">   
                    <button class="bg-main text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300">Button 2</button>
                </div>
            </div>
        </header>
    );
}
