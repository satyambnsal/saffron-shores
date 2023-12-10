import Link from "next/link";
import { GridTileImage } from "./grid/tile";
import { resorts } from "@/app/data";

export function Carousel() {
  if (!resorts?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselResorts = [...resorts, ...resorts, ...resorts];

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <ul className="animate-carousel flex gap-4">
        {carouselResorts.map((resort, i) => (
          <li
            key={`${resort.name}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link
              href={`/resorts/${resort.id}`}
              className="relative h-full w-full"
            >
              <GridTileImage
                alt={resort.name}
                label={{
                  title: resort.name,
                  amount: resort.maxPrice,
                  currencyCode: resort.currencyCode,
                  description: resort.description,
                }}
                src={resort.image_url}
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
