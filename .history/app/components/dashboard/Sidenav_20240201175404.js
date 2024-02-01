import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function SideNav() {
  return (
    <div className='h-full shadow-lg flex flex-col px-3 py-4 md:px-2'>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden h-full md:flex items-center">
        <DesktopNav />
      </div>
    </div>
  );
}