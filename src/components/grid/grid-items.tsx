import { Resort } from "@/types";
import { GridTileImage } from "@/components/grid/tile";
import Link from "next/link";
import { CURRENCY_CODE } from "@/app/data";
import { resorts } from "@/app/data";

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: Resort;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.name}`}
      >
        <GridTileImage
          src={item.image_url}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.name}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.name,
            amount: item.rooms[0].price,
            currencyCode: CURRENCY_CODE,
            description: item.description,
          }}
        />
      </Link>
    </div>
  );
}

export function ThreeItemGrid() {
  const homepageItems = resorts;
  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
