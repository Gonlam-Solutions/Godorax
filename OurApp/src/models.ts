
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
