import { SiteHeader } from "@/components/site-header";
import { BottomNav } from "@/components/bottom-nav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { categories } from "@/lib/data";
import { Metadata } from "next";

interface SearchPageProps {
  searchParams: Promise<{ q: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || "";

  return {
    title: `Search Results for "${query}" | Sacred Store`,
    description: `Find products matching your search query "${query}" at Sacred Store.`,
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || "";

  const allProducts = categories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      category: category.name,
    })),
  );

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container p-4 pb-20">
        <h1 className="text-2xl font-bold mb-6">Search Results for &quot;{query}&quot;</h1>
        {filteredProducts.length === 0 ? (
          <p>No products found matching your search.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <Link href={`/product/${product.id}`}>
                  <div className="aspect-square relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <Badge className="absolute top-2 left-2">{product.category}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold truncate">{product.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-primary font-bold">${product.price}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-muted-foreground">
                          {(Math.random() * (5 - 4) + 4).toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}