// components/Sidebar.tsx
"use client";

import { Home, FileText, User, Settings } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Resume", href: "/resume", icon: FileText },
    { name: "About", href: "/about", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-60 h-screen bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">My Website</h2>
      <nav className="flex flex-col gap-4">
        {menuItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition"
          >
            <Icon size={20} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
