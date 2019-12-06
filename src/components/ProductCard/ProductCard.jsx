import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  Button,
} from '@catho/quantum';

import { addToChart } from '../ShopCart/actions';

import {
  PriceBlock,
  ImgContainer,
  StyledFooter,
  CTAButton,
  CTAButtonContainer,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class ProductCard extends React.Component {
  render() {
    const {
      id,
      name,
      slug,
      imgUrl,
      formatedPrice,
      addToChartAction,
    } = this.props;

    const handleToChartClick = () => {
      addToChartAction({
        id,
        name,
        slug,
        imgUrl,
        formatedPrice,
      });
      // eslint-disable-next-line no-alert
      alert('Produto adicionado com sucesso!');
    };

    return (
      <Card>
        <Card.Header>
          <Card.HeaderText>
            <Card.Title small>{name}</Card.Title>
          </Card.HeaderText>
        </Card.Header>
        <PriceBlock>
          {formatedPrice}
        </PriceBlock>
        <ImgContainer src={imgUrl} alt={slug} />
        <StyledFooter>
          <CTAButtonContainer>
            <Button as="a" href={`/produto/${slug}`} size="small" skin="secondary">
              Ver detalhes
            </Button>
          </CTAButtonContainer>
          <div>
            <CTAButton size="small" skin="primary" icon="shopping_cart" onClick={() => handleToChartClick()}>
              Adicionar ao carrinho
            </CTAButton>
          </div>
        </StyledFooter>
      </Card>
    );
  };
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  formatedPrice: PropTypes.string.isRequired,
  addToChartAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addToChartAction: filters => dispatch(addToChart(filters)),
});
export default connect(
  null,
  mapDispatchToProps,
)(ProductCard);
