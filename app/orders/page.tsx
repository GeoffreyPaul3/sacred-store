import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { orders } from "@/lib/data"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container p-4 pb-20">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Order #{order.id}</p>
                  <p className="text-sm text-muted-foreground">{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>{order.status}</Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">{order.items.length} items</p>
                <p className="font-bold text-primary">Total: ${order.total.toFixed(2)}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

