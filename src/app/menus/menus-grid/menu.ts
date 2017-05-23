import {Dish} from '../../dishes/dishes-grid/dish';

export class Menu {
  id: number;
  date: string;
  firstDish : Dish[];
  secondDish : Dish[];
  dessert : Dish[];


  constructor(
    id: number,
    date: string,
    firstDish : Dish[],
    secondDish : Dish[],
    dessert : Dish[]
  ) { }
}