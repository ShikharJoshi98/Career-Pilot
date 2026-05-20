import { FaRegCircleUser } from "react-icons/fa6"
import { LuMail, LuZap } from "react-icons/lu"

function AccountDetails() {
    return (
        <section className="max-w-7xl mx-auto p-10">
            <div className="bg-white border border-gray-300 p-6 h-60 sm:h-auto shadow-sm hover:shadow-md transition-all duration-300 rounded-xl flex flex-col sm:flex-row items-center justify-between">
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-5">
                    <FaRegCircleUser className="size-16 text-neutral-700" />
                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className="text-2xl font-semibold text-neutral-600">John Doe</h1>
                        <div className="text-neutral-400 flex items-center gap-2 text-sm">
                            <LuMail />
                            <p>john.doe@gmail.com</p>
                        </div>
                    </div>
                </div>
                <button className="bg-blue-500 text-white rounded-md font-medium p-2 cursor-pointer hover:bg-blue-600">Update Account</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                <div className="rounded-3xl flex flex-col items-center justify-between gap-4 lg:gap-0 border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center place-self-start gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                            <LuZap className="text-blue-500" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            Free Plan
                        </h2>
                    </div>
                    <p className="text-gray-500 mt-1">
                        1 of 3 free requests remaining
                    </p>
                    <button className="rounded-xl bg-linear-to-r from-blue-500 to-indigo-500 px-4 py-2 font-medium text-white hover:opacity-90 transition">
                        Upgrade
                    </button>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h2 className="text-lg font-semibold text-gray-900">Status</h2>
                    <p className="mt-2 text-sm text-gray-500">Free requests used</p>
                    <div className="font-medium text-xs place-self-end text-gray-500">2/3</div>
                    <div className="mt-3 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full w-[66%] rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
                    </div>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h2 className="text-lg font-semibold text-gray-900">Security</h2>
                    <div className="mt-8 flex flex-col gap-4">
                        <button className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-3 text-left font-medium text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition">
                            Update Password
                        </button>
                        <button className="w-full rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-left font-medium text-red-600 hover:bg-red-100 transition">
                            Delete Account
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AccountDetails