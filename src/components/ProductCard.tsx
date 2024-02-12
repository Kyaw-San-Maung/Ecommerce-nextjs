import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 hover:shadow-xl transition-shadow"
    >
      <figure>
        <Image
          src="https://unsplash.com/photos/white-paper-roll-on-white-table-6W8H4puOJB0"
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <PriceTag price={product.price} className="" />
      </div>
    </Link>
  );
}
