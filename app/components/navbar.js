"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
//framer

const navItems = {
    "/": {
        name:"home",
    },
    "/projects": {
        name:"projects",
    },
    "/contact": {
        name:"contact"
    },
};

export default function Navbar() {
    let pathname = usePathname() || "/";

    return (
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div>
                <nav className="flex flex-row relative px-0 pb-0">
                    <div>
                        {Object.entries(navItems.map) =>}
                    </div>
                </nav>
            </div>
        </aside>
    )
}