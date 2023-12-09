import { resorts } from "@/app/data";
export const helper = () => {};

export const getResort = (id: number) => {
  const resort = resorts.find((resort) => resort.id === id);
  return resort;
};
