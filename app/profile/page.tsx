import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { User, Settings, CreditCard, MapPin, Bell, HelpCircle, LogOut } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container p-4 pb-20">
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-lg">John Doe</h2>
              <p className="text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
        </Card>

        <div className="space-y-2">
          {[
            { icon: Settings, label: "Account Settings" },
            { icon: CreditCard, label: "Payment Methods" },
            { icon: MapPin, label: "Delivery Addresses" },
            { icon: Bell, label: "Notifications" },
            { icon: HelpCircle, label: "Help & Support" },
          ].map((item) => (
            <Button key={item.label} variant="ghost" className="w-full justify-start h-14">
              <item.icon className="mr-4 h-5 w-5" />
              {item.label}
            </Button>
          ))}

          <Button variant="ghost" className="w-full justify-start h-14 text-destructive hover:text-destructive">
            <LogOut className="mr-4 h-5 w-5" />
            Logout
          </Button>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

