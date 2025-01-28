import Link from "next/link"
import { Home, ShoppingCart, User, Package } from "lucide-react"

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="container grid grid-cols-4 py-2">
        <Link href="/" className="flex flex-col items-center gap-1">
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/orders" className="flex flex-col items-center gap-1">
          <Package className="h-6 w-6" />
          <span className="text-xs">Orders</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center gap-1">
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs">Cart</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1">
          <User className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  )
}

