
export class Product {
  price: number;
  name: string;
  ingredients: string[];
  photo: string;
  description: string;

  constructor(price: number, name: string, ingredients: string[], photo: string, description: string) {
    this.price = price;
    this.name = name;
    this.ingredients = ingredients;
    this.photo = photo;
    this.description = description;
  }

}
