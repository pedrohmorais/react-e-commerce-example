import ProductsList from './mock';

export default class Products {
  static getAll() {
    return ProductsList;
  }

  static getById(id) {
    return ProductsList.find(p => p.id === id);
  }

  static getBySlug(slug) {
    return ProductsList.find(p => p.slug === slug);
  }
}
