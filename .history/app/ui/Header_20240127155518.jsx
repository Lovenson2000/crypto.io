import Link from "next/link";

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
      icon: DocumentDuplicateIcon,
    },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  ];
  
export default function Header() {
  return (
    <div className='h-20 p-2 bg-dark-blue'>

    </div>
  );
}

Link