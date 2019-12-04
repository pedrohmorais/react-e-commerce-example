/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  arrayOf,
  shape,
  string,
  any,
  bool,
  func,
} from 'prop-types';
import { ChevronDown } from 'components/SvgIcons';
import helpers from 'helpers';
import {
  StyledSelect,
  StyledOption,
  StyledSelectContainer,
  StyledSelectIcon,
  StyledSelectBlock,
  StyledSelectLabel,
} from './style';

const {
  generateRandomHash,
} = helpers;

const defaultProps = {
  ref: null,
  value: undefined,
  label: null,
  items: [],
  disabled: false,
  onChange: () => {},
  defaultItem: {
    value: '',
    label: 'Selecione...'
  },
};

const propTypes = {
  ref: any,
  value: any,
  disabled: bool,
  onChange: func,
  items: arrayOf(shape({
    value: any,
    label: string,
  })),
  defaultItem: shape({
    value: any,
    label: string,
  }),
  label: string,
};

const Select = ({
  items,
  defaultItem,
  label,
  disabled,
  onChange,
  value,
}) => {
  const elementProps = {
    disabled,
    onChange,
    value,
  };

  return (
    <StyledSelectBlock>
      <StyledSelectLabel>
        {label}
      </StyledSelectLabel>
      <StyledSelectContainer>
        <StyledSelect {...elementProps}>
          <StyledOption key={`select-${generateRandomHash}-default`} value={defaultItem.value}>{defaultItem.label}</StyledOption>
          {items.map(item => (
            <StyledOption value={item.value} key={`select-${generateRandomHash}-option-${item.value}`}>
              {item.label}
            </StyledOption>
          ))}
        </StyledSelect>
        <StyledSelectIcon>
          <ChevronDown />
        </StyledSelectIcon>
      </StyledSelectContainer>
    </StyledSelectBlock>
  );
};
Select.defaultProps = defaultProps;
Select.propTypes = propTypes;

export default Select;
