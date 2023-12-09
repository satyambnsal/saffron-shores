"use client";
import { Box, Badge, Container, Link, Heading } from "@radix-ui/themes";
import { ThemeToggle } from "./common/ThemeToggle";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";

const GITHUB_CONTRACTS_URL = "https://github.com/ethin-23/backend";

export const Header = () => {
  const [anonAadhaar] = useAnonAadhaar();
  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      console.log(anonAadhaar.pcd);
    }
  }, [anonAadhaar]);

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
