/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  StyledGunsmithCard,
  StyledGunsmithCardImageBlock,
  StyledGunsmithCardInfoBlock,
  StyledGunsmithSeeMore,
  StyledClickableArea,
  StyledGunsmithDescricao,
  StyledInfoButton,
} from 'components/GunsmithCard/style';
import Router from 'next/router';
import {
  string,
  arrayOf,
} from 'prop-types';
import Button from 'components/Button';


const defaultProps = {
  id: null,
  nome: null,
  resumo: null,
  descricao: null,
  regiao: null,
  cidade_slug: null,
  estado: null,
  telefone: null,
  instagram: null,
  facebook: null,
};

const propTypes = {
  id: string,
  nome: string,
  resumo: string,
  descricao: string,
  regiao: string,
  cidade_slug: string,
  estado: string,
  telefone: string,
  instagram: string,
  facebook: string,
};

const GunsmithCard = ({
  id,
  nome,
  resumo,
  descricao,
  regiao,
  cidade_slug,
  estado,
  telefone,
  instagram,
  facebook,
}) => {
  // const imgUrl = `https://airsoft-community-fields-logos.s3.amazonaws.com/${slug}.jpg`;
  const gunsmithUrl = `/armeiros/${id}`;
  const cidade = cidade_slug;

  const redirectToCampo = () => {
    Router.push(gunsmithUrl);
  };

  const renderDescricao = () => {
    return (
      <StyledGunsmithDescricao>
        {resumo}
      </StyledGunsmithDescricao>
    );
  };

  return (
    <StyledGunsmithCard>
      {/* <StyledGunsmithCardImageBlock>
        <figure>
          <img src={imgUrl} alt={nome} />
        </figure>
      </StyledGunsmithCardImageBlock> */}
      <StyledGunsmithCardInfoBlock withStyleType={false}>
        <a href={gunsmithUrl} target="_blank">
          <h2>{nome}</h2>
        </a>
        <div className="GunsmithCardAddress">
          <span>
            {regiao}
            {' '}
            -
            {' '}
            {cidade}
            -
            {estado}
          </span>
        </div>
        {renderDescricao()}
        <StyledInfoButton>
          <Button size="large">VER CONTATO</Button>
        </StyledInfoButton>
      </StyledGunsmithCardInfoBlock>
      <StyledGunsmithSeeMore>
        <a href={gunsmithUrl} target="_blank">
          <Button size="large">VER CONTATO</Button>
        </a>
      </StyledGunsmithSeeMore>
      <StyledClickableArea onClick={() => redirectToCampo()} />
    </StyledGunsmithCard>
  );
};
GunsmithCard.defaultProps = defaultProps;
GunsmithCard.propTypes = propTypes;

export default GunsmithCard;
