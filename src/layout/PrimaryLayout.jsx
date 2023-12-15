import Sidebar from "@/components/ui/sidebar/sidebar";
import { useSidebarContext } from "@/contex/SidebarProvider";
import React, { useEffect, useRef, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Logout } from "@/components/Logout";


export default function PrimaryLayout() {
  const { toggle } = useSidebarContext();
  const [profile, setProfile] = useState(false);

  const inputRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        ulRef.current &&
        !ulRef.current.contains(e.target)
      ) {
        setProfile(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [profile]);

  const { open, openUnion, openGram } = useSelector((state) => state.query);
  return (
    <div className="flex flex-col max-h-screen bg-secondary ">
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div className="text-white ">
          <Sidebar />
        </div>
        <div className="overflow-x-hidden">
          <div className="sticky top-0 z-10">
            {/* navbar */}
            <div className="bg-white border-b drawShadow">
              <div className="navbar ">
                <div className="flex-1">
                  <div className="flex items-center gap-2 pl-5">
                    {open?.name ? open?.name : "Home"}
                    {openUnion?.name && ` > ${openUnion?.name}`}
                    {openGram?.name && ` > ${openGram?.name}`}
                  </div>
                </div>

                <div className="flex-none ">
                  <ul className="px-1 menu menu-horizontal">
                    <li onClick={toggle}  >
                      <label htmlFor="my-drawer-2" className=" lg:hidden">
                        <IoMenuSharp className="w-6 h-6" />
                      </label>
                    </li>
                  </ul>
                  <div className="justify-end hidden w-full max-w-xs gap-4 lg:flex">
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex items-center justify-start gap-3.5">
                        <FaUser />
                        <select
                          className="pr-2 bg-transparent focus:outline-none"
                          name=""
                          id="">
                          <option
                            className="text-lg font-semibold text-slate-700"
                            value="Eng(US)">
                            Eng (US)
                          </option>
                          <div className=""></div>
                        </select>
                      </div>
                      <div
                        className="relative flex items-center cursor-pointer">
                        <div
                          ref={ulRef}
                          className="rounded-full">
                          {profile ? (
                            <ul className="absolute left-0 p-2 mt-12 bg-white border-r rounded shadow sm:mt-16 ">
                              <li className="flex w-full text-gray-600 cursor-pointer hover:text-indigo-700">
                                <Logout>
                                  <div className="flex items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon icon-tabler icon-tabler-logout"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                      <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                    </svg>
                                    <span
                                      className="ml-2 text-sm">
                                      Sign out
                                    </span>
                                  </div>
                                </Logout>
                              </li>

                            </ul>
                          ) : (
                            ""
                          )}
                          <div className="relative">
                            <img
                              className="object-cover w-10 h-10 rounded-md"
                              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                              alt="avatar"
                            />
                            {/* <div className="absolute inset-0 w-2 h-2 m-auto mb-0 mr-0 bg-green-400 border border-white rounded-full" /> */}
                          </div>
                        </div>
                        <div
                          onClick={() => setProfile(!profile)}
                          ref={inputRef}
                          className="flex ml-3 mr-6">
                          <p className="font-poppins text-base font-medium text-[#151D48]">
                            {/* {authInfo?.user?.username} */}
                          </p>
                          <p className="font-regular font-poppins text-sm text-[#737791]"> Admin </p>
                          <svg
                            aria-haspopup="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* navbar end */}
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
