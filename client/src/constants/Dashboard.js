import { LuFilePen, LuHouse, LuLaptop, LuScanText, LuUser } from "react-icons/lu";

export const sideNav = [
    {
        title: 'Dashboard',
        icon: LuHouse,
        path: '/dashboard'
    },
    {
        title: 'Analyse',
        icon: LuScanText,
        path: '/dashboard/analyse'
    },
    {
        title: 'Resume Builder',
        icon: LuFilePen,
        path: '/dashboard/resumeBuilder'
    },
    {
        title: 'Interview Prep',
        icon: LuLaptop,
        path: '/dashboard/interviewPrep'
    },
    {
        title: 'Account Details',
        icon: LuUser,
        path: '/dashboard/account-details'
    }
];