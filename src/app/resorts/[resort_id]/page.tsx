"use client";
import { Suspense } from "react";
import { GridTileImage } from "@/components/grid/tile";
import Footer from "@/components/footer";
import { Gallery } from "@/components/resort/gallery";
import { ProductDescription } from "@/components/resort/product-description";
import { resorts } from "@/app/data";
import { getResort } from "@/utils/helpers";
import { notFound } from "next/navigation";
export const runtime = "edge";

export default function ResortPage({ params }: { params: { id: number } }) {
  const resort = getResort(params.id) || resorts[0];
  console.log("resort", resort);

  if (!resort) return notFound();

  return (
    <div>
      {/* <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={resort.images.map((image) => ({
                src: image.src,
                altText: image.altText,
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription resort={resort} />
          </div>
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense> */}
      <h1>Hello</h1>
    </div>
  );
}
