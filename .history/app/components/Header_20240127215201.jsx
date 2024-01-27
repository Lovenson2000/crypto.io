
import React from 'react'

export default function Header() {
    return (
        <header className='p-4 text-white'>
            <div class="container mx-auto flex items-center justify-between">

                <div class="flex items-center">
                    <span class="text-xl font-semibold">Your Website</span>
                </div>
                <div class="flex items-center space-x-4">   
                    <button class="bg-main text-white px-4 py-2 rounded-full hov focus:outline-none">Button 2</button>
                </div>
            </div>
        </header>
    );
}
