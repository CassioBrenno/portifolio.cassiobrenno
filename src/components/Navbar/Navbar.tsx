'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { BurgerIcon, CloseIcon } from '../../utils/icons'

const navItems = [
  { label: '_home', href: '/' },
  { label: '_projetos', href: '/#projects' },
  { label: '_serviços', href: '/#services' },
  { label: '_contato', href: '/#contact' },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsVisible(!isVisible)

  return (
    <nav className="bg-primary border-border h-16 overflow-hidden border-b">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
          <div className="text-primary-content md:hidden">_menu</div>
        ) : (
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/images/icon1.png"
                alt="Cássio Brenno Icon"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                priority
              />
              <span className="text-primary-content text-lg font-medium">
                Cassio_Brenno
              </span>
            </div>
          </Link>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`${
            isVisible ? 'flex' : 'hidden'
          } animate-fade-in bg-primary absolute top-16 left-0 z-10 h-dvh w-dvw flex-col md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row lg:w-[70%]`}
        >
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="border-border flex items-center border-b px-4 text-2xl md:border-y-0 md:border-e md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0 lg:px-8"
            >
              <Link
                href={href}
                className={`text-primary-content hover:text-neutral w-full py-7 transition-all duration-150 md:py-0 ${
                  pathname === href ? 'text-neutral cursor-text' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar