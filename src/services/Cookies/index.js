import jsCookie from 'js-cookie';
import jsHttpCookie from 'cookie';

class Cookies {
  constructor(props = { req: false, res: false }) {
    this.req = props.req;
    this.res = props.res;
  }

  static setCookie(cookieName, value) {
    jsCookie.set(cookieName, value);
    console.log('setted');
  }

  setSSRCookie(cookieName, value) {
    const { req, res } = this;
    if (req && res) {
      res.setHeader('Set-Cookie', jsHttpCookie.serialize(cookieName, value));
    }
  }

  getSSRCookie(cookieName) {
    return this.getSSRCookies()[cookieName];
  }

  getSSRCookies() {
    const { req } = this;

    if (req && req.headers) {
      const cookies = req.headers.cookie;

      if (typeof cookies === 'string') {
        return jsHttpCookie.parse(cookies);
      }
    }
    return {};
  }

  static getCookie(cookieName) {
    return jsCookie.get(cookieName) || null;
  }
}

export default Cookies;
