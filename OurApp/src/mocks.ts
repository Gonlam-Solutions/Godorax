import {Product, Mesa} from './models';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'coffe',
    description: 'bolivian coffe from farmers of the south',
    photo: 'assets/img/1.jpeg',
    price: 32,
    ingredients: ['coffe', 'milk', 'water']
  },
  {
    id: 2,
    name: 'beer',
    description: 'german beer',
    photo: 'assets/img/1.jpeg',
    price: 23,
    ingredients: ['trigo', 'malta']
  },
  {
    id: 1,
    name: 'meat',
    description: 'pig meat with potatoes',
    photo: 'assets/img/1.jpeg',
    price: 43,
    ingredients: ['pig', 'potatoes', 'species']
  },
  {
    id: 4,
    name: 'salad',
    description: 'potato salad',
    photo: 'assets/img/1.jpeg',
    price: 34,
    ingredients: ['letuces', 'salt', 'potatoes']
  }];

  export const MOCK_TABLES: Mesa[] = [
    new Mesa([{
      id: 1,
      name: 'coffe',
      description: 'bolivian coffe from farmers of the south',
      photo: 'assets/img/1.jpeg',
      price: 32,
      ingredients: ['coffe', 'milk', 'water']
    },
    {
      id: 2,
      name: 'beer',
      description: 'german beer',
      photo: 'assets/img/1.jpeg',
      price: 23,
      ingredients: ['trigo', 'malta']
    }], 1),
    new Mesa([], 2)];
