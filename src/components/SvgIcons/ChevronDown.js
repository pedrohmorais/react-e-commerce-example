
import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  fill: string,
};

const defaultProps = {
  fill: undefined,
};

const ChrevronDown = ({
  fill,
}) => (
  <svg
    enableBackground="new 0 0 16 16"
    height="100%" fill={fill}
    version={1.1}
    viewBox="0 0 16 11"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    width="100%"
    y="0px"
  >
    <g transform="translate(-1292.000000, -2878.000000)">
      <g transform="translate(0.000000, 156.000000)">
        <g transform="translate(453.000000, 64.000000)">
          <g transform="translate(0.000000, 2627.000000)">
            <path d="M854.391304,33.6570048 L847.222222,40.8164251 C847.099838,40.938809 846.954912,41 846.78744,41 C846.619967,41 846.475041,40.938809 846.352657,40.8164251 L839.183575,33.6570048 C839.061191,33.534621 839,33.3880846 839,33.2173913 C839,33.046698 839.061191,32.9001616 839.183575,32.7777778 L840.78744,31.1835749 C840.909823,31.061191 841.05475,31 841.222222,31 C841.389695,31 841.534621,31.061191 841.657005,31.1835749 L846.78744,36.3140097 L851.917874,31.1835749 C852.040258,31.061191 852.185184,31 852.352657,31 C852.52013,31 852.665056,31.061191 852.78744,31.1835749 L854.391304,32.7777778 C854.513688,32.9001616 854.574879,33.046698 854.574879,33.2173913 C854.574879,33.3880846 854.513688,33.534621 854.391304,33.6570048 Z" id="fa-chevron-down" transform="translate(846.787440, 36.000000) scale(1, -1) rotate(-180.000000) translate(-846.787440, -36.000000) " />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

ChrevronDown.propTypes = propTypes;
ChrevronDown.defaultProps = defaultProps;

export default ChrevronDown;
