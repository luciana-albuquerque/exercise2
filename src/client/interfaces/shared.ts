export type ProductT = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: {
      rate: number,
      count: number
    }
  }

export type ButtonT = {
    text: string,
    icon?: boolean,
    onClick?: () => void;
  }

export type ArticleT = {
    title1: string, 
    title2?: string, 
    text: string, 
    button: string
  }

export type IngredientCardT = {
  name: string, 
  img: string, 
  description: string
}

export type StateT = {
  productsReducer: {
    loading: boolean,
    items: ProductT[],
    error: string
  },
  cartReducer: string[]
}