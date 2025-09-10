"use client";
import Link from "next/link";

const Navbar = () => {

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <ul className="flex gap-4 space-x-6 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-blue-600 font-semibold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
