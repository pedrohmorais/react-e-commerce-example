import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';

import Text from 'components/Text';

const children = () => text('children', 'Hello storybook');
const size = () => select('size', ['tiny', 'small', 'medium'], 'medium');
const transform = () => select('transform', ['none', 'capitalize', 'lowercase', 'uppercase'], 'none');
const weight = defaultValue => select('weight', ['regular', 'semi', 'bold'], defaultValue);
const italic = () => boolean('italic', false);

storiesOf('Text', module)
  .add('index', () => (
    <Text weight={weight('regular')} size={size()} transform={transform()} italic={italic()}>
      {children()}
    </Text>
  ))
  .add('Inline', () => (
    <Text.Inline weight={weight('regular')} size={size()} transform={transform()} italic={italic()}>
      {children()}
    </Text.Inline>
  ))
  .add('Heading', () => (
    <Text.Heading
      weight={weight('semi')}
      level={select('level', ['1', '2', '3'], '1')}
      transform={transform()}
      italic={italic()}
    >
      {children()}
    </Text.Heading>
  ));
