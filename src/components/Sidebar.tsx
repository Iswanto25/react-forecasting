"use client"

import { useState } from "react"
import Link from "next/link"
import {
    IoHomeOutline,
    IoDocumentTextOutline,
    IoAnalyticsOutline,
    IoPeopleOutline,
    IoSettingsOutline,
    IoBusinessOutline,
    IoStorefrontOutline,
    IoListOutline,
    IoCalendarClearOutline,
    IoCalendarOutline,
    IoTrendingUpOutline,
    IoChevronDown
} from "react-icons/io5";


type NavItem = {
    title: string
    icon: React.ElementType
    href?: string
    children?: NavItem[]
}

const navItems: NavItem[] = [
    { title: "Dashboard", icon: IoHomeOutline, href: "/dashboard" },
    {
        title: "Pencatatan Pajak",
        icon: IoDocumentTextOutline,
        children: [
            { title: "PBB", icon: IoBusinessOutline, href: "/pajak/pbb" },
            { title: "Pajak Lainnya", icon: IoStorefrontOutline, href: "/pajak/lainnya" },
            { title: "Lihat Semua", icon: IoListOutline, href: "/pajak/semua" },
        ],
    },
    {
        title: "Analitik & Laporan",
        icon: IoAnalyticsOutline,
        children: [
            { title: "Laporan Harian", icon: IoCalendarClearOutline, href: "/laporan/harian" },
            { title: "Laporan Bulanan", icon: IoCalendarOutline, href: "/laporan/bulanan" },
            { title: "Forecasting", icon: IoTrendingUpOutline, href: "/laporan/forecasting" },
        ],
    },
    { title: "Wajib Pajak", icon: IoPeopleOutline, href: "/wajib-pajak" },
    { title: "Pengaturan", icon: IoSettingsOutline, href: "/pengaturan" },
];
export default function Sidebar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null)

    const handleMenuToggle = (title: string) => {
        setOpenMenu(openMenu === title ? null : title)
    }

    return (
        <aside className='w-64 min-h-screen bg-[#0b1727] text-gray-300 p-4 flex flex-col'>
            <div className='mb-10'>
                <Link href='/'>
                    <h1 className='text-2xl font-bold text-white text-center'>tabler</h1>
                </Link>
            </div>

            <nav className='flex-1'>
                <ul className='space-y-2'>
                    {navItems.map((item) => (
                        <li key={item.title}>
                            {item.children ? (
                                <div>
                                    <button
                                        onClick={() => handleMenuToggle(item.title)}
                                        className='w-full flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                                        <item.icon className='w-5 h-5 mr-3' />
                                        <span>{item.title}</span>
                                        <IoChevronDown
                                            className={`w-5 h-5 ml-auto transition-transform duration-300 ${
                                                openMenu === item.title ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {openMenu === item.title && (
                                        <ul className='pl-6 mt-2 space-y-2'>
                                            {item.children.map((child) => (
                                                <li key={child.title}>
                                                    <Link
                                                        href={child.href!}
                                                        className='block p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center'>
                                                        <child.icon className='w-5 h-5 mr-3' />
                                                        {child.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={item.href!}
                                    className='flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                                    <item.icon className='w-5 h-5 mr-3' />
                                    <span>{item.title}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}