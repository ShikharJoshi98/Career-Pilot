import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuLogOut, LuSparkles } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { sideNav } from "../constants/Dashboard";

function Sidebar() {
    const [isSideNav, setSideNav] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside
            className={`${isSideNav ? 'w-54' : 'w-20'} top-0 left-0 sticky transition-all duration-300 min-h-screen hidden bg-white p-4 md:block border-r border-gray-400`}
        >
            <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-2xl shrink-0 bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <LuSparkles className="w-5 h-5 text-white" />
                </div>
                <span
                    className={`text-md sm:text-xl mb-1 transition-all duration-300 font-semibold text-neutral-800 tracking-tight flex items-end gap-1
                    ${isSideNav
                            ? 'opacity-100 translate-x-0 w-auto'
                            : 'opacity-0 overflow-hidden w-0 pointer-events-none'
                        }`}
                >
                    <h1>CareerPilot</h1>
                    <div className="w-1.5 h-1.5 ml-1 mb-1.5 rounded-full bg-blue-500"></div>
                </span>
            </div>
            <button
                onClick={() => setSideNav(!isSideNav)}
                className="absolute cursor-pointer z-50 -right-3 top-20 border border-gray-500 text-neutral-700 rounded-full p-1 bg-gray-200 shadow-md hover:scale-105"
            >
                {isSideNav ? <LuChevronLeft size={16} /> : <LuChevronRight size={16} />}
            </button>
            <ul className="space-y-2 mt-20">
                {sideNav.map((sideNavItem, index) => {
                    const Icon = sideNavItem.icon;
                    return (
                        <li
                            onClick={() => navigate(sideNavItem.path)}
                            key={index}
                            className={`cursor-pointer ${location.pathname === sideNavItem.path ? 'bg-black/10' : ''} hover:bg-black/5 font-medium flex items-center p-2 rounded-md ${location.pathname === sideNavItem.path ? 'text-neutral-700' : 'group-hover:text-neutral-700 text-neutral-600'}`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="size-5" />
                                <p
                                    className={`transition-opacity duration-300 text-sm whitespace-nowrap
                                        ${isSideNav
                                            ? 'opacity-100'
                                            : 'opacity-0 w-0 overflow-hidden pointer-events-none'
                                        }`}
                                >
                                    {sideNavItem.title}
                                </p>
                            </div>
                        </li>)
                }
                )}
            </ul>
            <button className="flex items-center gap-3 p-2 cursor-pointer absolute bottom-10 hover:text-red-600 text-red-500">
                <span className='text-xl'>
                    <LuLogOut />
                </span>
                <span
                    className={`font-semibold transition-opacity duration-300 text-sm whitespace-nowrap ${isSideNav ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden pointer-events-none'}`}
                >
                    Logout
                </span>
            </button>
        </aside>
    )
}

export default Sidebar