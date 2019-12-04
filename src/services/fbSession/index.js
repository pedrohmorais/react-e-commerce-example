import jsCookie from 'js-cookie';
import jsHttpCookie from 'cookie';

class FbSession {
  constructor(props = { req: false }) {
    this.req = props.req;
    this.accessToken = this.getCookie('fbAccessToken');
  }

  setCookie(cookieName, value) {
    jsCookie.set(cookieName, value);
  }

  hasSession() {
    return !!this.accessToken;
  }

  getSSRCookies() {
    const req = this.req;

    if (req && req.headers) {
      const cookies = req.headers.cookie;

      if (typeof cookies === 'string') {
        return jsHttpCookie.parse(cookies);
      }
    }
    return {};
  }

  getCookie(cookieName) {
    if (this.req) {
      return this.getSSRCookies()[cookieName];
    }

    return jsCookie.get(cookieName) || null;
  }

  createSession(fbInfo) {
    const {
      accessToken,
    } = fbInfo;

    if (accessToken) {
      this.accessToken = accessToken;
      this.setCookie('fbAccessToken', accessToken);
    }
  }
}

export default FbSession;
