/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  string,
  bool,
  func,
} from 'prop-types';
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledCheckboxBlock,
  StyledCheckboxLabel,
} from './style';


const defaultProps = {
  label: null,
  disabled: false,
  value: undefined,
  onChange: () => {},
  name: undefined,
  checked: undefined,
  defaultChecked: false,
};

const propTypes = {
  value: string,
  name: string,
  disabled: bool,
  onChange: func,
  label: string,
  checked: bool,
  defaultChecked: bool,
};

const Checkbox = ({
  label,
  disabled,
  onChange,
  value,
  name,
  checked,
  defaultChecked,
}) => {
  const elementProps = {
    disabled,
    onChange,
    value,
    name,
    checked,
    defaultChecked,
  };

  return (
    <StyledCheckboxBlock>
      <StyledCheckboxContainer>
        <StyledCheckbox type="checkbox" {...elementProps} />
        <div className="checkmark" />
        <StyledCheckboxLabel>
          {label}
        </StyledCheckboxLabel>
      </StyledCheckboxContainer>
    </StyledCheckboxBlock>
  );
};
Checkbox.defaultProps = defaultProps;
Checkbox.propTypes = propTypes;

export default Checkbox;
