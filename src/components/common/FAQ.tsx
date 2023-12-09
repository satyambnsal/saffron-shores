import { Text } from "@radix-ui/themes";
const supported_features = [
  {
    id: 2,
    question: "What is Saffron Shores",
    answer:
      "Saffron Shores is a platform based out of Vietnam. Saffron Shores offers Travel and Hospitality services all over the world",
  },
  {
    id: 3,
    question:
      "Why Indian citizen should pay special attention to the platform ?",
    answer:
      "As part of promoting tourism, we are offering exculsive discounts to Indian citizens.",
  },
  {
    id: 4,
    question: "What details it asks to Verify if I'm a Indian citizen ?",
    answer:
      "None At all. I mean really not a single thing. We verify your residential status using an amazing technology called Zero-Knowledge Proof. with ZK and anon-aadhar integration we verify your residential status.",
  },
  {
    id: 5,
    question: "Does it allow me to pay for my booking Via Crypto currency ?",
    answer: "Yes, It does. You can pay via cryptocurreny on Cello blockchain.",
  },
];

export const FAQ = () => {
  return (
    <div className="mt-8">
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          Supported Features
        </h2>
        <div className="mb-2 mt-8">
          <dl className="divide-y divide-gray-200">
            {supported_features.map(({ question, answer, id }) => (
              <div
                className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8"
                key={id}
              >
                <Text className="text-base font-bold md:col-span-5">
                  {question}
                </Text>
                <dd className="mt-2 md:col-span-7 md:mt-0">
                  <Text className="text-base">{answer}</Text>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {/* <div className="mt-4">
          <h2 className="my-8 block text-3xl font-bold tracking-tight">
            Upcoming Features 🚀
          </h2>
          <div className="mb-2 mt-8">
            <dl className="divide-y divide-gray-200">
              {planned_features.map(({ question, answer, id }) => (
                <div
                  className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8"
                  key={id}
                >
                  <Text
                    className="text-base font-medium md:col-span-5"
                    color="crimson"
                  >
                    {question}
                  </Text>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <Text className="text-base">{answer}</Text>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div> */}
      </div>
    </div>
  );
};
