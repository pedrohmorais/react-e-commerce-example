import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from 'components/Button';

storiesOf('Button', module).add('index', () => (
  <Button
    fullWidth={boolean('fullWidth', false)}
    kind={select(
      'kind',
      ['default', 'primary', 'primary-loading', 'primary-disabled', 'secondary'],
      'default',
    )}
    onClick={action('onClick')}
    size={select('size', ['small', 'medium', 'large'], 'medium')}
    type={select('type', ['button', 'reset', 'submit'], 'button')}
  >
    {text('children', 'Hello Storybook')}
  </Button>
));
