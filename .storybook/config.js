import { configure, addDecorator } from '@storybook/react';
import 'loki/configure-react';
import { ThemeDecorator } from './decorators';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src', true, /\.stories\.js$/);

addDecorator(ThemeDecorator);
addDecorator(withKnobs);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
