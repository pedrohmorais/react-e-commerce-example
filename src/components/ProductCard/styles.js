import styled from 'styled-components';
import {
  Card,
  Colors,
} from '@catho/quantum';

const PriceBlock = styled(Card.Content)`
  font-weight: bold;
  font-size: 18px;
`;
const ImgContainer = styled(Card.Media)`
  margin: 12px 15px 20px;
  background-color: ${Colors.neutral[0]};
`;

export {
  PriceBlock,
  ImgContainer,
}