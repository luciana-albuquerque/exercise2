export type ProductT = {
    id: any;
    title: string;
    description: any;
    price: any;
    image: any;
    category: any;
    rating: {
      rate: number,
      count: number
    }
  }

export type ButtonT = {
    text: string,
    icon?: any,
  }

export type ArticleT = {
    title1: string, 
    title2?: string, 
    text: string, 
    button: string
  }

export type IngredientCardT = {
  name: string, 
  img: any, 
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