import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { categories } from "@/lib/data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const productId = Number.parseInt(resolvedParams.id);

  if (isNaN(productId)) {
    notFound();
  }

  const product = categories
    .flatMap((c) => c.products)
    .find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container p-4 pb-20">
        <div className="space-y-6">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-3xl font-bold text-primary">${product.price}</p>
            <p className="text-muted-foreground">{product.description}</p>

            <Button className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}