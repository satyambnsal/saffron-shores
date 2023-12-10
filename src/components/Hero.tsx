"use client";
// import Image from "next/image";

import { Button, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

// import backgroundImage from "@/images/background.jpg";

export function Hero() {
  const router = useRouter();
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <Flex
        direction="column"
        className="mx-auto max-w-4xl lg:max-w-4xl lg:px-6"
        align="center"
      >
        <h1 className="font-display text-6xl font-bold sm:text-7xl">
          <Heading className="block text-center" size="9" highContrast>
            Saffron Shores
          </Heading>
          <Text className="block text-center text-sm">
            Unveil the Magic of Vietnam: Exclusive Discounts for Indian
            Travelers
          </Text>
        </h1>
        <Text className="font-display space-y-6 text-2xl tracking-wide" mt="8">
          Embark on an unforgettable journey to Vietnam and discover its hidden
          treasures with Saffron Shores. We offer exclusive discounts and offers
          for Indian travelers, making your adventure both exciting and
          affordable. Most of all, We don't take your personal information in
          order to verify your residential status.
        </Text>
        <Button
          onClick={() => router.push("/dashboard")}
          className="w-64 cursor-pointer"
          size="3"
          mt="9"
        >
          Start Now!
        </Button>
      </Flex>
    </div>
  );
}
