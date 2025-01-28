"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Bell, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 bg-orange-400 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">ON</div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none">Sacred</span>
            <span className="font-bold text-lg leading-none">
              Store <span className="text-orange-400">•</span>
            </span>
          </div>
        </Link>

        <div className={`flex-1 ${isSearchOpen ? "flex" : "hidden md:flex"} justify-center items-center`}>
          <form onSubmit={handleSearch} className="w-full max-w-sm">
            <div className="relative">
              <Input
                type="search"
                placeholder="What are you Looking For?"
                className="w-full bg-muted/50 border-none rounded-full pl-4 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
          </Button>
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-orange-400 rounded-full"></span>
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="/categories" className="text-lg font-semibold">
                  Categories
                </Link>
                <Link href="/orders" className="text-lg font-semibold">
                  My Orders
                </Link>
                <Link href="/profile" className="text-lg font-semibold">
                  Profile
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

