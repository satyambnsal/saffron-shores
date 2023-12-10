import Price from "@/components/price";
import Prose from "@/components/prose";
// import { VariantSelector } from "./variant-selector";
import { Button } from "@radix-ui/themes";
import { Resort } from "@/types";

export function ProductDescription({ resort }: { resort: Resort }) {
  const handleBookResort = () => {
    console.log("Booked Resort");
  };
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{resort.name}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price amount={resort.maxPrice} currencyCode={resort.currencyCode} />
        </div>
      </div>
      {/* <VariantSelector options={product.options} variants={product.variants} /> */}

      {resort.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={resort.descriptionHtml}
        />
      ) : null}
      <Button onClick={handleBookResort}>Book Now</Button>
    </>
  );
}
