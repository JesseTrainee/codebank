export interface Product {
    id: string;
    name: string;
    description: string;
    image_url: string;
    slug: string;
    price: number;
    created_at: string;
}

export const products: Product[] = [
    {
      id: "uuid",
      name: "produto 1",
      description: "muito bom",
      price: 50.9,
      image_url: "https://source.unsplash.com/random?product",
      slug: "produto-1",
      created_at: "2022-01-29T00:00:000", 
    },
  ];