import styled from 'styled-components';
import { Card } from '@catho/quantum';

const ShopCartWrapper = styled.div`
 
`;

const ShopCartItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

const ShopCartItem = styled.li`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  ${Card.Header} {
    padding: 16px;
  }
`;

const ThumbImage = styled.div`
  overflow: hidden;
  position: relative;
  display: inline-block;
  height: 72px;
  width: 72px;
  border-radius: 4px;

  img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
  }
`;

const CancelWrapper = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  background: transparent;
`;

export {
  CancelWrapper,
  ShopCartItem,
  ShopCartItems,
  ShopCartWrapper,
  ThumbImage,
};
