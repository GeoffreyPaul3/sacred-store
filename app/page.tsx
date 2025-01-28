import { SiteHeader } from "@/components/site-header"
import { BannerSlider } from "@/components/banner-slider"
import { CategoriesSection } from "@/components/categories-section"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container space-y-8 p-4 pb-20">
        <BannerSlider />
        <CategoriesSection />
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Top Sales</h2>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  )
}

