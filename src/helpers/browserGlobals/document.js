/* eslint-disable no-undef */
const mockDocument = {
  addEventListener() {},
  removeEventListener() {},
  cookie: '',
  // Add more fields from document as necessary
  body() {},
  querySelector() {},
  querySelectorAll() {},
  createElement() {},
};

export { mockDocument };

const defaultDocument = typeof document !== 'undefined' ? document : mockDocument;

export default defaultDocument;
