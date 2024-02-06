"use client";

import React, { useState } from 'react'
import { experimental_}

function SearchButton() {
    const {pending} = useFormState();
}
export default function Search() {
    const [query, setQuery] = useState();

    return (
        <form action="">
            <input
                value={query}
                type="text"
                placeholder='Search coin...'
            />
        </form>
    )
}
