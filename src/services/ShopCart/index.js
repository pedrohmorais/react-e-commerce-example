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

  setShopCartSSR(items) {
    this.cookiesClass.setSSRCookie(cookieName, JSON.stringify(items));

    console.log('setShopCart', JSON.parse(this.cookiesClass.getSSRCookie(cookieName)));
  }

  static getShopCart() {
    return JSON.parse(Cookies.getCookie(cookieName));
  }

  getShopCartSSR() {
    return this.cookiesClass.getSSRCookie(cookieName);
  }
}

export default ShopCart;
