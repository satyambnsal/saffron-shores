import Link from "next/link";
import { GridTileImage } from "./grid/tile";
import { resorts, CURRENCY_CODE } from "@/app/data";

export function Carousel() {
  if (!resorts?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...resorts, ...resorts, ...resorts];

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <ul className="animate-carousel flex gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.name}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link
              href={`/product/${product.id}`}
              className="relative h-full w-full"
            >
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount: product.rooms[0].price,
                  currencyCode: CURRENCY_CODE,
                }}
                src={product.image_url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
