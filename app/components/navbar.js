"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
    "/": {
        name:"home",
    },
    "/projects": {
        name:"projects",
    },
    "/blog": {
        name:"blog"
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
                        {Object.entries(navItems).map(([path, {name}]) => {
                            const isActive = path === pathname;
                            return (
                                <Link key={path} href={path}>
                                    <span className="relative py-1 px-2">{name}</span>
                                </Link>
                                
                            );})}
                    </div>
                </nav>
            </div>
        </aside>
    );
}