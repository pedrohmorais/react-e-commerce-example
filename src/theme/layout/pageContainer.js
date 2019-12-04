import device from './media-queries';

const pageContainer = `
  margin: 0 auto;
  width: 100%;
  position: relative;

  @media ${device.laptop} {
    max-width: 1200px;
  }
`;
export default pageContainer;
