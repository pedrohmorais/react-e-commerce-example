import browserGlobals from './browserGlobals';

const generateRandomHash = () => Math.random()
  .toString(36)
  .substring(2, 15);

export default {
  browserGlobals,
  generateRandomHash,
};
