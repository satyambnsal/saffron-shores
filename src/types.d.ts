export type Room = {
  name: string;
  room_size: string;
  occupancy: number;
  price: string;
};

export type Resort = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  rooms: Room[];
  maxPrice: string;
  minPrice: string;
  currencyCode: string;
  descriptionHtml?: string;
  images: { src: string; altText: string }[];
};
