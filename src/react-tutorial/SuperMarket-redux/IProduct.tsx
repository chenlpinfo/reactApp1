export interface IProduct {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  nutrition: {
    carbs: number;
    fat: number;
    protein: number;
    salt: number;
  };
  price_id: string;
  storage: string;
  quantity: number;
}
