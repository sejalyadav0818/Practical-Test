export interface Product {
    _id?: string;
    name: string;
    image: string;
    description: string;
    quantity: number;
    unitPrice: number;
  }
  
  export interface CartItem {
    product :Product;
    id: string;
    quantity: number;
  }
  
  export interface RootState {
    products: Product[];
    cart: CartItem[];
  }
  