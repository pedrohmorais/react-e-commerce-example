import styled from 'styled-components';

// /* stylelint-disable */
// $biggerHeight: 400px;
// $smallerHeight:  205px;
// $minimumHeight: 155px;

// :export {
//   biggerHeight: $biggerHeight;
//   smallerHeight: $smallerHeight;
//   minimumHeight: $minimumHeight;
// }
// /* stylelint-enable */

// :global {
//   button.mapboxgl-popup-close-button {
//     right: 5px;
//   }
// }

// .biggerMap {
//   height: $biggerHeight;
// }

// .smallerMap {
//   height: $smallerHeight;

//   @media screen and (max-width: $medium-screen-min-width) {
//     height: $minimumHeight;
//   }
// }

const biggerHeight = '400px';
const smallerHeight = '205px';
const minimumHeight = '155px';

const StyledMapGoogle = styled.div`
  .streetView {
    width: 25px;
    height: 25px;

    @media screen and (min-width: $medium-screen-min-width) {
      width: 35px;
      height: 35px;
    }
  }

  .mapinha {
    width: 100%;
    display: flex;
  }
`;

const StyledMap = styled.div`
  width: 100%;
  display: flex;
`;

// const StyledMapContainer = styled.div`
//   height: ${props => (props.bigger ? biggerHeight : smallerHeight)};

//   @media screen and (max-width: $medium-screen-min-width) {
//     ${props => (props.bigger ? '' : `height: ${minimumHeight}`)}
//   }
// `;

const StyledUnavailableMap = styled.div`
  align-items: center;
  background-image: url("./../../assets/map-notavailable.png");
  color: $white-four;
  display: flex;
  flex-direction: column;
  font-family: $font-base;
  font-size: 12px;
  font-weight: $semi;
  justify-content: center;
  height: 150px;

  p {
    margin-top: 10px;
    text-align: center;
    width: 60%;
    line-height: 120%;
  }

  @media screen and (min-width: $medium-screen-min-width) {
    font-size: 14px;
    height: 205px;

    p { width: 50%; }
  }
`;

// .biggerMap {
//   height: $biggerHeight;
// }

// .smallerMap {
//   height: $smallerHeight;

//   @media screen and (max-width: $medium-screen-min-width) {
//     height: $minimumHeight;
//   }
// }


export { StyledMapGoogle, StyledMap, StyledUnavailableMap };
