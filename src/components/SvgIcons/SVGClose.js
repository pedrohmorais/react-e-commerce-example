

import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  fill: string,
};

const defaultProps = {
  fill: undefined,
};

const SVGClose = ({
  fill,
}) => (
  <svg
    enableBackground="new 0 0 16 16"
    height="21px"
    fill={fill}
    version="1.1"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    width="21px"
    y="0px"
  >
    <path d="M19 4q0.43 0 0.715 0.285t0.285 0.715q0 0.422-0.289 0.711l-6.297 6.289 6.297 6.289q0.289 0.289 0.289 0.711 0 0.43-0.285 0.715t-0.715 0.285q-0.422 0-0.711-0.289l-6.289-6.297-6.289 6.297q-0.289 0.289-0.711 0.289-0.43 0-0.715-0.285t-0.285-0.715q0-0.422 0.289-0.711l6.297-6.289-6.297-6.289q-0.289-0.289-0.289-0.711 0-0.43 0.285-0.715t0.715-0.285q0.422 0 0.711 0.289l6.289 6.297 6.289-6.297q0.289-0.289 0.711-0.289z" />
  </svg>
);

SVGClose.propTypes = propTypes;
SVGClose.defaultProps = defaultProps;

export default SVGClose;
