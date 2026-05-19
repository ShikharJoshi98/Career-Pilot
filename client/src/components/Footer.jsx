import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import { navItems } from "../constants/Home";

export function Footer() {
    return (
        <footer className="flex w-full md:flex-row flex-col-reverse gap-8 md:gap-0 md:justify-between rounded-t-4xl  bg-blue-600 max-w-7xl px-12 mx-auto py-12">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6 text-white">
                    <FaGithub className="hover:text-white/70 cursor-pointer" />
                    <FaTwitter className="hover:text-white/70 cursor-pointer" />
                    <FaLinkedin className="hover:text-white/70 cursor-pointer" />
                </div>
                <ul className="flex flex-wrap gap-8 text-sm text-white">
                    {
                        navItems.map((navItem, index) => (
                            <li key={index} className="hover:text-white/70 cursor-pointer">{navItem}</li>
                        ))
                    }
                </ul>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-5 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs">
                            ✓
                        </div>
                        <span className="text-white cursor-pointer">
                            Created By Shikhar Joshi
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-8 h-8 rounded-2xl bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <LuSparkles className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-semibold flex items-end gap-0.5 tracking-tight text-white">
                    CareerPilot
                    <div className="w-1.5 h-1.5 ml-1 mb-1.5 rounded-full bg-white"></div>
                </h1>
            </div>
        </footer>
    )
}