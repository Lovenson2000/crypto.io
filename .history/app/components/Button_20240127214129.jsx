import { Link } from "lucide-react";

export default function Button({children}) {
    return (
        <Link className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300">
            {children}
        </Link>
    );
}

