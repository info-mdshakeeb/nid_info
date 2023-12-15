import { useSidebarContext } from '@/contex/SidebarProvider';
import SidebarMenu from './sidebar-menu'


const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, close, } = useSidebarContext()
  return (
    <>
      {isSmallOpen && (
        <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-black bg-opacity-50  backdrop-blur-sm" />
      )}
      <aside
        className={`w-72  bg-[#006A4E]  h-screen lg:sticky absolute top-0 overflow-y-auto scrollbar-hide  flex-col  ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? "flex z-[999]" : "hidden"}`} >
        <div className="sticky top-0 px-2 z-[50]">
          <div className="pt-5 pb-10 text-center">
            <span className='pr-5 text-3xl font-semibold'>NID INFO</span>
          </div>
          <SidebarMenu />
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
