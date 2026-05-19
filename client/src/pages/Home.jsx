import { LuCircleCheckBig, LuZap } from "react-icons/lu"
import { features, pricingPlans } from "../constants/Home"
import { BsArrowRight } from "react-icons/bs"

function Home() {
    return (
        <main>
            <section className="py-10 sm:py-17 bg-linear-to-b from-white to-blue-100 text-neutral-700 w-full max-w-7xl mx-auto relative flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="inline-flex backdrop-blur-xl py-1.5 px-5 items-center gap-2 mb-6 rounded-full border-2 border-blue-500 bg-blue-500/15 text-blue-500">
                        <LuZap className="size-4" />
                        <span className="text-sm font-medium">AI-Powered Career Platform</span>
                    </div>
                    <h1 className="text-[40px] sm:text-5xl flex flex-col md:text-6xl font-semibold leading-tight tracking-tight">
                        <span className="">Land Your Dream Job</span>
                        <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            Faster With AI.
                        </span>
                    </h1>
                    <p className="mt-4 sm:mt-6 text-gray-500 text-xs sm:text-base leading-relaxed max-w-96 sm:max-w-xl mx-auto">
                        Analyse your resume, get an ATS score, discover the right jobs. build a stunning resume and ace every interview.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <button className="sm:px-8 px-4 py-3 sm:py-4 rounded-full bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm sm:text-md font-medium cursor-pointer">
                            Get Started Now
                        </button>
                        <button className="sm:px-8 px-4 py-3 sm:py-4 text-sm sm:text-md rounded-full border border-neutral-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-medium cursor-pointer text-neutral-700 bg-white/70 backdrop-blur-md">
                            See How it works
                        </button>
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-7xl py-16">
                <div className="px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="max-w-5xl lg:max-w-lg">
                        <p className="text-blue-500 uppercase tracking-[0.2em] text-xs font-medium">
                            Everything you need.
                        </p>
                        <h2 className="mt-5 text-3xl sm:text-4xl md:text-[42px] text-neutral-700 font-bold leading-tight">
                            Four Tools.
                            <br />
                            <span className="text-blue-500">One Career leap</span>
                        </h2>
                        <p className="mt-6 text-neutral-600 leading-relaxed">
                            From your resume to the offer letter, we have got every step covered.
                        </p>
                        <button className="mt-8 bg-blue-500 py-3 pr-2 pl-3 rounded-full flex text-lg items-center gap-3 text-white transition cursor-pointer">
                            Explore all features
                            <div className="bg-white rounded-full text-blue-500 p-1">
                                <BsArrowRight className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div key={index} className="group relative rounded-2xl border-2 shadow-lg border-blue-500/10 bg-blue-200 p-6 hover:border-blue-500/30 transition">
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
                                    <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                        <Icon className="w-7 h-7 text-blue-500" />
                                    </div>
                                    <div className="relative mt-5">
                                        <h3 className="font-semibold text-blue-500">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-neutral-600 font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl flex gap-4 sm:flex-row flex-col justify-center font-semibold text-blue-500">
                        <span className="text-neutral-700">Start free.</span>
                        <span>Upgrade when ready.</span>
                    </h2>
                    <p className="mt-8 text-neutral-500 max-w-xl mx-auto">
                        Your first 3 requests are completely free - no card needed.
                    </p>
                    <div className="mt-16">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
                            {pricingPlans.map((plan, index) => (
                                <div key={index} className="rounded-3xl hover:-translate-y-1 transition-all duration-300 border-2 bg-white border-blue-500 bg-linear-to-b from-blue-400/5 to-blue-500/5 p-8 shadow-xl">
                                    <p className="text-neutral-500 text-sm">{plan.name}</p>
                                    <h3 className="text-4xl font-semibold text-blue-500 mt-2">
                                        {plan.price}
                                    </h3>
                                    <p className="text-neutral-500 mt-1 text-sm">
                                        {plan.subtitle}
                                    </p>
                                    <p className="text-neutral-600 mt-6">
                                        {plan.description}
                                    </p>
                                    <button className="w-full mt-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-blue-500 text-white font-medium cursor-pointer">
                                        {plan.buttonText}
                                    </button>
                                    <div className="border-t border-black/40 my-8"></div>
                                    <p className="text-neutral-500 text-sm mb-4">
                                        Included in {plan.name}:
                                    </p>
                                    <ul className="space-y-4 text-sm text-neutral-600">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <LuCircleCheckBig className="text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden w-[90%] mx-auto mt-18 mb-16 rounded-4xl border border-blue-400/20 bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 px-6 sm:px-12 py-20 shadow-[0_20px_80px_rgba(30,64,175,0.25)]">
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                        <span className="text-blue-50">
                            Build Resume.
                        </span>{" "}
                        <span className="bg-linear-to-r from-green-300 via-green-200 to-green-300 bg-clip-text text-transparent">
                            Crack Interviews.
                        </span>{" "}
                        <span className="text-blue-50">
                            Get Hired.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-blue-100/70 text-sm sm:text-base leading-relaxed">
                        Join thousands of job seekers using CareerPilot to get hired faster.
                    </p>
                    <button className="group relative mx-auto mt-12 flex items-center justify-center rounded-full bg-linear-to-r from-white to-white/60 px-10 py-4 text-lg sm:text-xl font-semibold text-neutral-700 shadow-[0_20px_60px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_90px_rgba(59,130,246,0.45)] active:scale-95">
                        <span className="relative z-10">
                            Get Started
                        </span>
                        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </button>
                    <p className="text-white/70 mt-10">First 3 analysis free - No credit card required</p>
                </div>
            </section>
        </main>
    )
}

export default Home