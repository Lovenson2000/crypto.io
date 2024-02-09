"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from 'react';

const filterOptions = [
    { name: 'Price', value: 'current_price', },
    { name: 'Market Cap', value: 'market_cap', },
    { name: 'Market Rank', value: 'market_cap_rank', },
    { name: 'Last 24H %', value: 'market_cap_change_percentage_24h', },
];

export default function SearchAndFilter({ handleSearch, handleFilter }) {

    return (
        <div className="w-full p-1 flex items-center justify-between gap-12">
            <SearchBox handleSearch={handleSearch} />
            <FilterBox handleFilter={handleFilter} />
        </div>
    );
}

function SearchBox({ handleSearch }) {
    const [searchQuery, setSearchQuery] = useState();

    return (
        <div className="flex w-full max-w-sm items-center gap-4">
            <Input
                value={searchQuery}
                type="text"
                placeholder="search coin"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
                type="submit"
                onClick={(e) => handleSearch(searchQuery)}
            >
                Search
            </Button>
        </div>
    );
}
