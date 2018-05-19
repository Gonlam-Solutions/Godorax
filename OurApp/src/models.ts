
export class Product {
  id: number;
  price: number;
  name: string;
  ingredients: string[];
  photo: string;
  description: string;

  constructor(id: number, price: number, name: string, ingredients: string[], photo: string, description: string) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.ingredients = ingredients;
    this.photo = photo;
    this.description = description;
  }

}

export class Mesa {
  buyedProducts: Product[];
  id: number;

  constructor(buyedProducts: Product[],  id: number) {
    this.buyedProducts = buyedProducts;
    this.id = id;
  }

  addProduct(product: Product) {
    this.buyedProducts.push(product);
  }
}
