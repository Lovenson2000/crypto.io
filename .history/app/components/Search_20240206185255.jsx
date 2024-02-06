"use client";

import React, { useState } from 'react'

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
