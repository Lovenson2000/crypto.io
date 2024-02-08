import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react'

export default function SearchAndFilter() {
    return (
        <div></div>
    )
}

function SearchBox() {

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
        </div>
    );



}

function FilterBox() {

}