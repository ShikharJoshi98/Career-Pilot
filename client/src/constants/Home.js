import { LuBriefcase, LuFilePen, LuMessageSquare, LuScanText } from "react-icons/lu";

export const navItems = [
    "Features",
    "Pricing",
    "Tutorial"
];

export const features = [
    {
        icon: LuScanText,
        title: "AI Resume Analyser",
        backgroundColor: "bg-green-500/15",
        iconBackgroundColor: "bg-green-500",
        description:
            "Upload your resume and get a ATS score. Our AI pinpoints strenghts and weaknesses so you can fix it before recruiters see it",
    },
    {
        icon: LuBriefcase,
        title: "Smart Job Matcher",
         backgroundColor: "bg-pink-500/15",
        iconBackgroundColor: "bg-pink-500",
        description:
            "After analysing your resume, CareerPilot matches you with a role that actually fits your skills and experience - no more applying blindly",
    },
    {
        icon: LuFilePen,
        title: "AI Resume Creator",
         backgroundColor: "bg-yellow-500/15",
        iconBackgroundColor: "bg-yellow-500",
        description:
            "Answer a few questions about your experience and goals. Our AI crafts a recruiter ready and ATS optimised resume",
    },
    {
        icon: LuMessageSquare,
        title: "Interview Preparation",
         backgroundColor: "bg-purple-500/15",
        iconBackgroundColor: "bg-purple-500",
        description:
            "Get Personalised interview questions based on your skills or resume. Practice with AI feedback and walk into interview with confidence",
    }
];

export const pricingPlans = [
    {
        name: "Free",
        price: "₹0",
        subtitle: "No credit card required",
        description: "Try before you commit.",
        buttonText: "Start for free",
        features: [
            "3 AI requests total",
            "ATS score report",
            "Basic job matches",
            "1 resume template",
            "Community support"
        ]
    },
    {
        name: "Pro Monthly",
        price: "₹299",
        subtitle: "Per month",
        description: "Full access, cancel anytime",
        buttonText: "Upgrade to Pro",
        features: [
            "Unlimited resume analyses",
            "Full ATS + strength/weakness",
            "Unlimited job matching",
            "All resume templates + PDF export",
            "Unlimited interview prep",
            "Priority AI processing",
            "Email support"
        ]
    },
    {
        name: "Elite",
        price: "₹1,499",
        subtitle: "6 months",
        description: "Save 17% vs monthly",
        buttonText: "Upgrade to Elite",
        features: [
            "Everything in Pro Monthly",
            "Early access to new features",
            "Resume review by AI weekly",
            "LinkedIn profile tips",
            "Dedicated support"
        ]
    }
];