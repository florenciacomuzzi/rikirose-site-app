import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const navItems = {
  '/': {
    name: 'home',
  },
  // '/blog': {
  //   name: 'blog',
  // },
  '/about': {
    name: 'about',
  },
    '/music': {
    name: 'music',
  },
  '/events': {
    name: 'events',
  },
  '/contact': {
    name: 'contact',
  },
}

export function Navbar() {
    const socialLinks = [
    { href: "https://github.com/yourprofile", icon: <FaGithub size={20} />, label: "GitHub" },
    { href: "https://twitter.com/yourprofile", icon: <FaTwitter size={20} />, label: "Twitter" },
    { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
  ];
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        {/*<nav*/}
        {/*  className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"*/}
        {/*  id="nav"*/}
        {/*>*/}
          <nav
          // className="flex flex-row justify-between items-center px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          className="relative flex flex-wrap justify-between items-center px-4 pb-2 fade md:overflow-auto scroll-pr-6 md:relative w-full"
          id="nav"
          >
          <div className="flex flex-row space-x-4 pl-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-sm md:text-base"
                >
                  {name}
                </Link>
              )
            })}
          </div>
                {/* Centered Text */}
              <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold font-[Pacifico] whitespace-nowrap md:text-xl">
                Riki Rose
              </div>


                    {/* Social Media Links */}
          <div className="flex space-x-4 pr-2">
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center"
                aria-label={label}
              >
                {icon}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
