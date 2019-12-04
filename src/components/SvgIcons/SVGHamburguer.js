import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  fill: string,
};

const defaultProps = {
  fill: undefined,
};

const SVGHamburguer = ({
  fill,
}) => (
  <svg
    enableBackground="new 0 0 16 16"
    height="100%"
    fill={fill}
    version="1.1"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    width="100%"
    y="0px"
    data-reactid="15"
  >
    <path
      fill={fill}
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    />
  </svg>
);

SVGHamburguer.propTypes = propTypes;
SVGHamburguer.defaultProps = defaultProps;

export default SVGHamburguer;
