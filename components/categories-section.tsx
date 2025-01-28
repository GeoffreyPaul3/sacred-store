import Link from "next/link"
import { categories } from "@/lib/data"

export function CategoriesSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Categories</h2>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`} className="group flex aspect-square flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md">         
              <span className="text-3xl">{category.icon}</span>
              <span className="mt-2 text-center font-medium group-hover:underline">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

