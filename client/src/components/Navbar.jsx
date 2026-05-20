import { useState } from "react";
import { LuMenu, LuSparkles, LuX } from "react-icons/lu";
import { navItems } from "../constants/Home";
import AuthModal from "./modals/AuthModal";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthModal, setAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState("login");

    const handleAuthMode = (mode) => {
        setAuthMode(mode);
        setAuthModal(true);
    }

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white backdrop-blur-xl">
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-6 py-4">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-8 h-8 rounded-2xl bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <LuSparkles className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-2xl font-semibold flex items-end gap-0.5 tracking-tight text-neutral-900">
                            CareerPilot
                            <div className="w-1.5 h-1.5 ml-1 mb-1.5 rounded-full bg-blue-500"></div>
                        </h1>
                    </div>
                    <ul className="hidden lg:flex items-center gap-20 text-sm font-medium text-neutral-500">
                        {navItems.map((navItem, index) => (
                            <li
                                key={index}
                                className="relative cursor-pointer transition-all duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {navItem}
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3">
                        <button onClick={() => handleAuthMode("login")} className="hidden sm:flex border border-neutral-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 px-5 py-2 rounded-xl text-sm font-medium text-neutral-700 bg-white/70 backdrop-blur-md">
                            Login
                        </button>
                        <button onClick={() => handleAuthMode("register")} className="bg-linear-to-r from-blue-400 to-blue-500 hover:opacity-90 transition-all duration-300 text-white px-5 py-2 rounded-xl text-sm font-medium hidden sm:block">
                            Get Started
                        </button>
                        <button onClick={() => setIsOpen(true)} className="lg:hidden w-10 h-10 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition">
                            <LuMenu className="w-5 h-5" />
                        </button>
                    </div>
                </nav>
            </header>
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            ></div>
            <aside
                className={`fixed top-0 left-0 h-screen w-70 bg-white z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <LuSparkles className="w-4 h-4 text-white" />
                        </div>

                        <h2 className="text-xl font-semibold">
                            Career<span className="text-blue-600">Pilot</span>
                        </h2>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 rounded-xl hover:bg-neutral-100 flex items-center justify-center transition"
                    >
                        <LuX className="w-5 h-5 text-neutral-700" />
                    </button>
                </div>
                <ul className="flex flex-col px-6 py-8 gap-6">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="text-lg font-medium text-neutral-700 hover:text-blue-600 transition cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="absolute bottom-8 left-0 w-full px-6 sm:hidden flex flex-col gap-3">
                    <button className="w-full border border-neutral-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 py-3 rounded-xl text-sm font-medium text-neutral-700">
                        Login
                    </button>

                    <button className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-all duration-300 text-white py-3 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/20">
                        Get Started
                    </button>
                </div>
            </aside>
            {
                isAuthModal && <AuthModal onClose={() => setAuthModal(false)} authMode={authMode} />
            }
        </>
    );
}

export default Navbar;