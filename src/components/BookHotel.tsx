import { useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";

export const BookHotel = () => {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);
  return (
    <main>
      <h1>Book Hotel</h1>
    </main>
  );
};
