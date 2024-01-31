import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-main p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          Crypto.io
        </div>
      </Link>
      
    </div>
  );
}