"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Petrox
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/") ? "text-yellow-400" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/about") ? "text-yellow-400" : ""
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/95 border-gray-700">
                <DropdownMenuItem>
                  <Link href="/services" className="text-white hover:text-gray-300">
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services#exploration" className="text-white hover:text-gray-300">
                    Exploration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services#transport" className="text-white hover:text-gray-300">
                    Transportation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services#maintenance" className="text-white hover:text-gray-300">
                    Maintenance
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/projects"
              className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/projects") ? "text-yellow-400" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              href="/careers"
              className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/careers") ? "text-yellow-400" : ""
              }`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-yellow-400" : ""
              }`}
            >
              Contact
            </Link>

            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              <Link
                href="/"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/careers"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
