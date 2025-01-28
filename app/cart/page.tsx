import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container p-4 pb-20">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex gap-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/assets/img-5.jpg"
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">12.5kg Gas Cylinder</h3>
                <p className="text-primary font-bold">$49.99</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="icon">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">1</span>
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" className="ml-auto">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$49.99</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$54.99</span>
              </div>
            </div>
          </Card>

          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

