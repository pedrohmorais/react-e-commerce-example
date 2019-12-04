import { colors, device } from 'theme';


const cardContainer = `
  padding: 10px 15px;
  background-color: ${colors.white};
  box-shadow: 0 0 6px 0 rgba(0,0,0,.2);
  border: 1px solid ${colors.hobbitGrey};
  width: calc(100% - 30px);
  margin: 8px 0;

  @media ${device.laptop} {
    border-radius: 6px;
    width: calc(100% - 50px);
    margin: 15px 0;
    padding: 20px 25px;
  }

  header.cardTitle {
    padding: 0px 25px 0px;
    border-bottom: 1px solid ${colors.hobbitGrey};
    margin: 0px -25px;

    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: ${colors.fontTitle};

    & > * {
      margin: 5px 0px 10px
      font-size: 16px;

      @media ${device.laptop} {
        margin: 0px 0px 15px;
        font-size: 18px;
      }
    }
  }
`;
export default cardContainer;
