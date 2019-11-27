import ProductsList from './mock';

export default class Products {
  static getAll() {
    return ProductsList;
  }

  static getById(id) {
    return ProductsList.filter(p => p.id === id);
  }
}
