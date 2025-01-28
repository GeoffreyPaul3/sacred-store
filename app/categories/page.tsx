import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/data"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container p-4 pb-20">
        <h1 className="text-2xl font-bold mb-6">Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <span className="text-3xl mb-2">{category.icon}</span>
                    <h2 className="text-xl font-bold text-white">{category.name}</h2>
                    <p className="text-white/80 text-sm mt-1">{category.products.length} products</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

