import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import { Package, Tag, CreditCard } from "lucide-react"

const notifications = [
  {
    id: 1,
    title: "Your order has been shipped!",
    description: "Order #1234 is on its way. Expected delivery in 2-3 days.",
    icon: Package,
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Flash Sale: 50% off on Mining Equipment",
    description: "Don't miss out on our biggest sale of the year. Ends in 24 hours!",
    icon: Tag,
    time: "1 day ago",
  },
  {
    id: 3,
    title: "Payment Successful",
    description: "Your payment of $299.99 for Order #1235 was successful.",
    icon: CreditCard,
    time: "3 days ago",
  },
]

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container p-4 pb-20">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className="p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <notification.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold">{notification.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

