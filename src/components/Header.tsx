"use client";
import { Box, Badge, Container, Link, Heading } from "@radix-ui/themes";
import { ThemeToggle } from "./common/ThemeToggle";

import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";

export const Header = () => {
  const [anonAadhaar] = useAnonAadhaar();

  return (
    <Container>
      <Box height="0" className="absolute left-4 top-8 flex items-center gap-4">
        <Link href="/" className="p-4">
          <Heading className="leading-2">Saffron Shores</Heading>
        </Link>
      </Box>
      <Box
        height="0"
        className="absolute right-4 top-8 flex items-center gap-4"
      >
        {anonAadhaar.status === "logged-in" && (
          <Badge highContrast size="2">
            Verified Indian Citizen
          </Badge>
        )}
        {anonAadhaar.status === "logged-out" && <LogInWithAnonAadhaar />}
        <ThemeToggle />
      </Box>
    </Container>
  );
};
