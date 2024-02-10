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
import _ from 'lodash';
import { useState } from 'react';

const filterOptions = [
    { name: 'Price', value: 'current_price', },
    { name: 'Market Cap', value: 'market_cap', },
    { name: 'Market Rank', value: 'market_cap_rank', },
    { name: 'Last 24H %', value: 'market_cap_change_percentage_24h', },
];

export default function SearchAndFilter({ handleSearch, handleFilter }) {

    return (
        <div className="w-full p-1 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12">
            <SearchBox handleSearch={handleSearch} />
            <FilterBox handleFilter={handleFilter} />
        </div>
    );
}

function SearchBox({ handleSearch }) {
    const [searchQuery, setSearchQuery] = useState();

    const debouncedSearch = _.debounce((query) => {
        handleSearch(query); // manipulating the input while the user is typing
    }, 300);

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        debouncedSearch(query);
    };

    return (
        <div className="flex w-full max-w-sm items-center gap-4">
            <Input
                value={searchQuery}
                type="text"
                placeholder="search coin"
                onChange={handleChange}
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

function FilterBox({ handleFilter }) {

    const [selectedValue, setSelectedValue] = useState('');

    const handleValueChange = (value) => {
        setSelectedValue(value);
        handleFilter(value);
    };

    return (
        <Select
            value={selectedValue}
            onValueChange={handleValueChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Parameters</SelectLabel>
                    {filterOptions.map((option) => (
                        <SelectItem
                            value={option.value}
                            key={option.name}
                        >
                            {option.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

