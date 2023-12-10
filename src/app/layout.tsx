import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Providers } from "../contexts/providers";
import { fjallaOne, monteserrat } from "../styles/fonts";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import { Header } from "@/components/Header";
import { Suspense, useEffect, useState } from "react";
import Footer from "@/components/footer";

// export const metadata = {
//   title: "Saffron Shores",
//   description:
//     "Unveil the Magic of Vietnam: Exclusive Discounts for Indian Travelers",
// };

const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${monteserrat.variable}, ${fjallaOne.variable}`}
    >
      <body>
        <Providers>
          <Theme
            accentColor="plum"
            grayColor="auto"
            panelBackground="solid"
            scaling="100%"
            radius="large"
          >
            <div className="min-h-screen">
              {ready ? (
                <AnonAadhaarProvider _appId={app_id}>
                  <div>
                    <Header />
                    {children}
                    <Suspense>
                      <Footer />
                    </Suspense>
                  </div>
                  <Toaster />
                </AnonAadhaarProvider>
              ) : null}
            </div>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
