import Sidebar from "@/components/ui/sidebar/sidebar";
import { useSidebarContext } from "@/contex/SidebarProvider";
import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Outlet } from "react-router-dom";

export default function PrimaryLayout() {
  const { toggle } = useSidebarContext();
  return (
    <div className="flex flex-col max-h-screen bg-secondary ">
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div className="text-white ">
          <Sidebar />
        </div>
        <div className="overflow-x-hidden">
          <div className="sticky top-0 z-10 bg-white">
            <div className="bg-secondary">
              <div className="navbar ">
                <div className="flex-1">
                  <a className="text-xl btn btn-ghost "></a>
                </div>
                <div className="flex-none">
                  <ul className="px-1 menu menu-horizontal">
                    <li onClick={toggle}  >
                      <label htmlFor="my-drawer-2" className=" lg:hidden">  <IoMenuSharp className="w-6 h-6" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
