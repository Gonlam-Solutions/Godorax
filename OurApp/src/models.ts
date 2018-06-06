
export class Product {
  _id: String;
  price: number;
  name: string;
  ingredients: string[];
  photo: string;
  description: string;

  constructor(id: String, price: number, name: string, ingredients: string[], photo: string, description: string) {
    this._id = id;
    this.price = price;
    this.name = name;
    this.ingredients = ingredients;
    this.photo = photo;
    this.description = description;
  }

}

export class Mesa {
  tableNumber: number;
  _id: String;

  constructor(tn: number, id: String) {
    this.tableNumber = tn;
    this._id = id;
  }
}
export class Relation {
    _id: String;
    table: number;
    product: String;

    constructor (id: String, tn: number, product: String) {
      this.table = tn;
      this._id = id;
      this.product = product;
    }
}
