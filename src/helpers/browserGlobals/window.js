/* eslint-disable no-undef */
const localStorageMock = () => {
  let store = {};
  return {
    getItem: key => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
};

const mockWindow = {
  btoa() {},
  matchMedia() {
    return { matches: {} };
  },
  addEventListener() {},
  removeEventListener() {},
  setTimeout() {},
  requestAnimationFrame() {},
  cancelAnimationFrame() {},
  scrollTo() {},
  scrollBy() {},
  LO: {
    page() {},
  },
  hbspt: {
    forms: {
      create() {},
    },
  },
  jQuery: {},
  sessionStorage: localStorageMock(),
  // Add more fields from window as necessary
};

export { mockWindow };

const defaultWindow = typeof window !== 'undefined' ? window : mockWindow;

export default defaultWindow;
