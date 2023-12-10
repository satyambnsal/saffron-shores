"use client";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/common/FAQ";
// import { AnonAadhaarProvider } from "anon-aadhaar-react";
// import { Header } from "@/components/Header";
import { Suspense } from "react";
import { ThreeItemGrid } from "@/components/grid/grid-items";
import { Carousel } from "@/components/carousel";

/**
 * The accent is the most dominant color in your theme, it is used for primary buttons, links, and other interactive elements.
 * Grays are used for backgrounds, borders, text and other non-interactive elements. for more info, checkout docs folder
 *
 */

export default function Home() {
  return (
    <div>
      <div className="mt-8">
        <Hero />
        <ThreeItemGrid />
        <Suspense>
          <Carousel />
        </Suspense>
        <FAQ />
      </div>
    </div>
  );
}
