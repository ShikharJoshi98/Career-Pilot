import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

function HomeLayout() {
    return (
        <main className="min-h-screen flex flex-col bg-blue-100">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default HomeLayout