import React from 'react';
import {
  Container,
  Card,
  Button,
} from '@catho/quantum';

import ProductsService from 'services/Products';
import {
  PriceBlock,
  ImgContainer,
  DescriptionBlock,
  CTAButtonContainer,
} from './styles';


class Product extends React.Component {
  static async getInitialProps(props) {
    const { query } = props;
    const { productSlug } = query;
    const product = ProductsService.getBySlug(productSlug);

    if (!product) {
      return { withError: { statusCode: 404, message: 'Página não encontrada!' } };
    }

    return { product };
  }

  render() {
    const { product } = this.props;
    const {
      name,
      slug,
      imgUrl,
      formatedPrice,
      description,
    } = product;

    return (
      <div>
        <Container no-gutters withBreakpoints>
          <Card>
            <ImgContainer src={imgUrl} alt={slug} />
            <Card.Header>
              <Card.HeaderText>
                <Card.Title small>{name}</Card.Title>
              </Card.HeaderText>
            </Card.Header>
            <PriceBlock>
              {formatedPrice}
            </PriceBlock>
            <Card.Content>
              <CTAButtonContainer>
                <Button as="a" href="/carrinho" size="small" skin="primary" icon="shopping_cart" full>
                  COMPRAR
                </Button>
              </CTAButtonContainer>
            </Card.Content>
          </Card>
          <br />
          <Card>
            <Card.Header>
              <Card.HeaderText>
                <Card.Title small>Descrição:</Card.Title>
              </Card.HeaderText>
            </Card.Header>
            <DescriptionBlock>
              {description}
            </DescriptionBlock>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Product;
