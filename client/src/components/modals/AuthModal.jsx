import { useState } from "react"
import { LuCircleCheckBig, LuSparkles, LuX } from "react-icons/lu"
import Input from "../Input";

function AuthModal({ onClose, authMode }) {
    const [isMode, setMode] = useState(authMode);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [loginError, setLoginError] = useState("");

    const handleChange = (e, mode) => {
        const { name, value } = e.target;
        if (mode === "login") {
            setLoginData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
        else {
            setRegisterData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log(registerData);
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-10 bg-black/70 backdrop-blur-sm">
            <div className="relative w-225 rounded-2xl overflow-hidden border border-white/10 bg-white shadow-2xl flex">
                <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-red-500">
                    <LuX size={18} />
                </button>
                <div className="w-1/2 p-10 bg-blue-500 hidden md:flex flex-col justify-center">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-8 h-8 rounded-2xl bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <LuSparkles className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-2xl font-semibold flex items-end gap-0.5 tracking-tight text-white">
                            CareerPilot
                            <div className="w-1.5 h-1.5 ml-1 mb-1.5 rounded-full bg-white"></div>
                        </h1>
                    </div>
                    <h2 className="text-3xl mt-8 font-semibold text-white">
                        Make your Resume.
                    </h2>
                    <p className="text-emerald-200 text-3xl font-semibold mt-2">
                        Get Hired.
                    </p>
                    <p className="text-white/80 mt-6 text-sm">
                        Your AI-powered career co-pilot. Build, analyse and land your next role.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-white">
                        {
                            ["Resume Builder", "Career Guide", "Interview Prep"].map((text, index) => (
                                <li key={index} className="flex items-center gap-2"><LuCircleCheckBig /> {text}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center md:items-start">
                    <div className="flex md:hidden items-center gap-3 cursor-pointer group">
                        <div className="w-8 h-8 rounded-2xl bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <LuSparkles className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-2xl font-semibold flex items-end gap-0.5 tracking-tight text-black">
                            CareerPilot
                            <div className="w-1.5 h-1.5 ml-1 mb-1.5 rounded-full bg-white"></div>
                        </h1>
                    </div>
                    <div className="flex gap-4 mt-10">
                        <button onClick={() => setMode('login')} className={`px-6 py-2 ${isMode === 'login' ? 'bg-blue-500/80 text-white rounded-lg' : 'text-neutral-400'} text-sm font-medium`}>
                            Sign In
                        </button>
                        <button onClick={() => setMode('register')} className={`px-6 py-2 ${isMode === 'register' ? 'bg-blue-500 text-white rounded-lg' : 'text-neutral-700'} text-sm font-medium`}>
                            Register
                        </button>
                    </div>
                    {
                        isMode === 'login' &&
                        <form onSubmit={handleLoginSubmit} className="mt-8 space-y-4 w-full">
                            <Input type="email" placeholder="Email Address" name="email" value={loginData.email} onChange={(e) => handleChange(e, 'login')} />
                            <Input type="password" placeholder="Password" name="password" value={loginData.password} onChange={(e) => handleChange(e, 'login')} />
                            <div className="flex justify-between items-center w-full text-sm text-neutral-400">
                                <button className="text-blue-400 hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                            {loginError && (
                                <p className="text-red-500 text-center text-sm">
                                    {loginError}
                                </p>
                            )}
                            <button type="submit" className="mt-6 w-full cursor-pointer py-3 bg-linear-to-r from-blue-400 to-blue-700 text-white rounded-lg font-medium">
                                Sign In →
                            </button>
                            <p className="text-sm text-neutral-400 mt-4 text-center">
                                Don't have an account?{" "}
                                <span onClick={() => setMode('register')} className="text-blue-400 cursor-pointer">
                                    Sign up for free
                                </span>
                            </p>
                        </form>
                    }
                    {
                        isMode === 'register' &&
                        <form onSubmit={handleRegisterSubmit} className="mt-6 space-y-4 w-full">
                            <Input name="name" value={registerData.name} onChange={(e) => handleChange(e, 'register')} placeholder="Name" />
                            <Input name="email" value={registerData.email} type="email" onChange={(e) => handleChange(e, 'register')} placeholder="Email Address" />
                            <div>
                                <Input name="password" value={registerData.password} type="password" onChange={(e) => handleChange(e, 'register')} placeholder="Password" />
                            </div>
                            <Input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
                            {formError && (
                                <p className="text-red-500 text-center text-sm">
                                    {formError}
                                </p>
                            )}
                            <button type="submit" className="w-full py-3 bg-linear-to-r text-white from-blue-400 to-blue-500 rounded-lg font-medium">
                                Create Account →
                            </button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default AuthModal