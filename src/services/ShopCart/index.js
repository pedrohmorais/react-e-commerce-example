import Cookies from '../Cookies';

const cookieName = 'shopCart';

class ShopCart {
  constructor(props = { req: false, res: false }) {
    const { req, res } = props;
    this.req = req;
    this.res = res;
    this.cookiesClass = new Cookies({ req, res });
  }

  static setShopCart(items) {
    Cookies.setCookie(cookieName, JSON.stringify(items));
  }

  static clearShopCart() {
    Cookies.setCookie(cookieName, JSON.stringify([]));
  }

  setShopCartSSR(items) {
    this.cookiesClass.setSSRCookie(cookieName, JSON.stringify(items));
  }

  static getShopCart() {
    const cartItems = JSON.parse(Cookies.getCookie(cookieName));
    if (cartItems && cartItems.items) {
      return cartItems;
    }
    const newItems = { items: [] };
    this.setShopCart(newItems);
    return newItems;
  }

  getShopCartSSR() {
    return JSON.parse(this.cookiesClass.getSSRCookie(cookieName));
  }
}

export default ShopCart;
