"use client";

import { Theme } from "@radix-ui/themes";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/common/FAQ";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import { BookHotel } from "@/components/BookHotel";
import { Header } from "@/components/Header";

/**
 * The accent is the most dominant color in your theme, it is used for primary buttons, links, and other interactive elements.
 * Grays are used for backgrounds, borders, text and other non-interactive elements. for more info, checkout docs folder
 *
 */
const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

export default function Home() {
  return (
    <AnonAadhaarProvider _appId={app_id} _isWeb={false}>
      <Header />
      <div className="mt-8">
        <Hero />
        {/* <FAQ /> */}
        <BookHotel />
      </div>
    </AnonAadhaarProvider>
  );
}
