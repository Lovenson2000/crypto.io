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

export default function SearchAndFilter() {
    return (
        <div></div>
    )
}

function SearchBox() {

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Search</Button>
        </div>
    );



}

function FilterBox() {

}