import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { products } from "@/lib/data"

interface ProductCardProps {
  product: (typeof products)[0]
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            {product.badge && (
              <Badge className="absolute left-2 top-2 bg-black/80 hover:bg-black/70">{product.badge}</Badge>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold line-clamp-2">{product.name}</h3>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <div className="mt-2 font-semibold">${product.price.toFixed(2)}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

