import { SiteHeader } from "@/components/site-header";
import { BottomNav } from "@/components/bottom-nav";
import { categories } from "@/lib/data";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.id === Number.parseInt(resolvedParams.id));

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <SiteHeader />
      <main className="container p-4 pb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{category.icon}</span>
            <h1 className="text-2xl font-bold">{category.name}</h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {category.products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-primary font-bold">${product.price}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}