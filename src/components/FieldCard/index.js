/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  StyledFieldCard,
  StyledFieldCardImageBlock,
  StyledFieldCardInfoBlock,
  StyledFieldSeeMore,
  StyledClickableArea,
  StyledFieldTypes,
} from 'components/FieldCard/style';
import Router from 'next/router';
import {
  string,
  arrayOf,
} from 'prop-types';
import Button from 'components/Button';


const defaultProps = {
  endereco: null,
  cidade: null,
  estado: null,
  fieldTypes: [],
};

const propTypes = {
  nome: string.isRequired,
  slug: string.isRequired,
  endereco: string,
  cidade: string,
  estado: string,
  fieldTypes: arrayOf(string),
};

const FieldCard = ({
  nome,
  slug,
  endereco,
  cidade,
  estado,
  fieldTypes,
}) => {
  const imgUrl = `https://airsoft-community-fields-logos.s3.amazonaws.com/${slug}.jpg`;
  const fieldUrl = `/campos/${slug}`;

  const redirectToCampo = () => {
    Router.push(fieldUrl);
  };

  const renderFieldTypes = () => {
    const fieldTypesEl = [];
    fieldTypes.forEach((fieldType, i) => fieldTypesEl.push(
      <li key={`fieldType-${i}`}>
        {fieldType}
      </li>,
    ));

    return fieldTypes[0] ? (
      <StyledFieldTypes>
        {fieldTypesEl}
      </StyledFieldTypes>
    ) : null;
  };

  return (
    <StyledFieldCard>
      <StyledFieldCardImageBlock>
        <figure>
          <img src={imgUrl} alt={nome} />
        </figure>
      </StyledFieldCardImageBlock>
      <StyledFieldCardInfoBlock withStyleType={!!fieldTypes[0]}>
        <a href={fieldUrl} target="_blank">
          <h2>{nome}</h2>
        </a>
        <div className="fieldCardAddress">
          <span>
            {endereco}
            {' '}
            -
            {' '}
            {cidade}
            -
            {estado}
          </span>
        </div>
        {renderFieldTypes()}
      </StyledFieldCardInfoBlock>
      <StyledFieldSeeMore>
        <a href={fieldUrl} target="_blank">
          <Button size="large">VER DETALHES</Button>
        </a>
      </StyledFieldSeeMore>
      <StyledClickableArea onClick={() => redirectToCampo()} />
    </StyledFieldCard>
  );
};
FieldCard.defaultProps = defaultProps;
FieldCard.propTypes = propTypes;

export default FieldCard;
