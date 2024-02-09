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

const filterOptions = {
    {name: 'Price',
    href: 'current_price',
},
}

export default function SearchAndFilter({ handleSearch }) {

    return (
        <div className="w-full p-1 flex items-center justify-between gap-12">
            <SearchBox handleSearch={handleSearch}/>
            <FilterBox />
        </div>
    );
}

function SearchBox({handleSearch}) {
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
                onClick={()=> handleSearch(searchQuery)}
            >
                Search
            </Button>
        </div>
    );
}

function FilterBox() {

    const [filterParameter, setFilterParameter] = useState("");

    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Parameters</SelectLabel>
                    <SelectItem value="current_price">Price</SelectItem>
                    <SelectItem value="market_cap">Market Cap</SelectItem>
                    <SelectItem value="market_cap_rank">Market Rank</SelectItem>
                    <SelectItem value="market_cap_change_percentage_24h">Last 24H %</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );

}