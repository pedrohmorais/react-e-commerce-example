import styled from 'styled-components';
import {
  Card,
  Colors,
  Button,
} from '@catho/quantum';

const PriceBlock = styled(Card.Content)`
  font-weight: bold;
  font-size: 18px;
`;

const ImgContainer = styled(Card.Media)`
  margin: 12px 15px 20px;
  background-color: ${Colors.neutral[0]};
`;

const StyledFooter = styled(Card.Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CTAButton = styled(Button)`
  min-height: 36px;
  margin-right: 20px;
`;

const CTAButtonContainer = styled.div`
  a {
    text-decoration: none;
    box-sizing: border-box;
  }
  button {
    min-height: 36px;
    margin-right: 20px;
  }
`;

export {
  PriceBlock,
  ImgContainer,
  StyledFooter,
  CTAButton,
  CTAButtonContainer,
}