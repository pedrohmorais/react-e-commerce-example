import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  fill: string,
};

const defaultProps = {
  fill: '#0066C0',
};

const ChrevronRight = ({
  fill,
}) => (
  <svg enableBackground="new 0 0 16 16" height="100%" fill={fill} version="1.1" viewBox="0 0 11 16" xmlns="http://www.w3.org/2000/svg" x="0px" width="100%" y="0px">
    <g id="Fase-01" stroke="none" strokeWidth="1" fillRule="evenodd">
      <g id="angle" transform="translate(-1299.000000, -2875.000000)">
        <g id="Group-10" transform="translate(0.000000, 156.000000)">
          <g id="Group-5" transform="translate(453.000000, 64.000000)">
            <g id="paginacao" transform="translate(0.000000, 2627.000000)">
              <path d="M859.391304,33.6570048 L852.222222,40.8164251 C852.099838,40.938809 851.954912,41 851.78744,41 C851.619967,41 851.475041,40.938809 851.352657,40.8164251 L844.183575,33.6570048 C844.061191,33.534621 844,33.3880846 844,33.2173913 C844,33.046698 844.061191,32.9001616 844.183575,32.7777778 L845.78744,31.1835749 C845.909823,31.061191 846.05475,31 846.222222,31 C846.389695,31 846.534621,31.061191 846.657005,31.1835749 L851.78744,36.3140097 L856.917874,31.1835749 C857.040258,31.061191 857.185184,31 857.352657,31 C857.52013,31 857.665056,31.061191 857.78744,31.1835749 L859.391304,32.7777778 C859.513688,32.9001616 859.574879,33.046698 859.574879,33.2173913 C859.574879,33.3880846 859.513688,33.534621 859.391304,33.6570048 Z" id="fa-chevron-down" transform="translate(851.787440, 36.000000) scale(-1, 1) rotate(-270.000000) translate(-851.787440, -36.000000) " />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

ChrevronRight.propTypes = propTypes;
ChrevronRight.defaultProps = defaultProps;

export default ChrevronRight;
