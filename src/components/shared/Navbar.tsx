"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { IoMenu } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className='py-4 shadow-md'>
            <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
                {/* logo */}
                <div className='font-bold'>
                    <Link href="/">Daily News</Link>
                </div>

                {/* desktop menu */}
                <NavigationMenu className='hidden lg:flex'>
                    <NavigationMenuList className="flex gap-4">
                        {/* Regular Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/news" className={`${pathname === '/news' ? 'text-red-500 font-bold' : ''}hover:text-red-500`}>News</NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Dropdown Menu */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href='/services' className={`${pathname === '/services' ? 'text-red-500 font-bold' : ''}hover:text-red-500`}>
                                <NavigationMenuTrigger className='hover:text-red-500'>Services</NavigationMenuTrigger>
                                <NavigationMenuContent className="">
                                    <ul className='text-gray-700 shadow-md rounded-md px-5 py-4 space-y-2'>
                                        <li><NavigationMenuLink href='/services/web'>Web Development</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href='/services/apps'>Mobile Apps</NavigationMenuLink></li>
                                        <li> <NavigationMenuLink href='/services/seo'>SEO</NavigationMenuLink></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Another Regular Link */}
                        <NavigationMenuLink className={`${pathname === '/about' ? 'text-red-500 font-bold' : ''}hover:text-red-500`} href="/about">About</NavigationMenuLink>
                        <NavigationMenuLink className={`${pathname === '/contact' ? 'text-red-500 font-bold' : ''}hover:text-red-500`} href="/contact">Contact</NavigationMenuLink>

                    </NavigationMenuList>

                </NavigationMenu>

                {/* color */}
                <div className='hidden lg:flex items-center space-x-4'>
                    <div className='flex items-center'>
                        <span className='mr-2'>Dark Mode</span>
                        <Switch />
                    </div>
                    <div>
                        <Button variant="outline">Button</Button>
                    </div>
                </div>

                {/* mobile menu */}
                <div className='lg:hidden'>
                    <Button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <AiOutlineClose size={24}></AiOutlineClose> : <IoMenu size={24}/>
                        }
                    </Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar