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

export default function SearchAndFilter({ onSearch }) {

    return (
        <div className="w-full p-1 flex items-center justify-between gap-12">
            <SearchBox onSearch={onSearch} />
            <FilterBox />
        </div>
    )
}

function SearchBox({onSearch}) {
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
                onClick={()=> onSearch(searchQuery)}
            >
                Search
            </Button>
        </div>
    );
}

function FilterBox() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Parameters</SelectLabel>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="marketCap">Market cap</SelectItem>
                    <SelectItem value="circulatingSupplies">Circulating supplies</SelectItem>
                    <SelectItem value="last24H">Last 24H %</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );

}