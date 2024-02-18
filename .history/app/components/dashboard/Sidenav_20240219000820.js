import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function SideNav() {
  return (
    <div className='dark:bg-slate-900 h-full shadow-lg flex flex-col px-2 py-1 md:px-2'>
      <div className="md:hidden dark:bg-slate-800">
        <MobileNav />
      </div>
      <div className="hidden rounded-md h-full md:w-62 md:flex fixed">
        <DesktopNav />
      </div>
    </div>
  );
}