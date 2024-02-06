"use client";

import React, { useState } from 'react'
import { useFormState } from 'react-dom';

const initialState = {
    message: null,
}

function SearchButton() {
    const { pending } = useFormState();

    return (
        <button type="submit">
            Search
        </button>
    )
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
