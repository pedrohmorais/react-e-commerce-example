import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// FONT AWESOME SETUP
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faStar as fasStar,
  faCheckSquare,
  faUserCircle,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faThumbsUp } from '@fortawesome/fontawesome-free-regular';

import StyledIcon from './icons.style';

library.add(faTimes, fasStar, faCheckSquare, farStar, faThumbsUp, faUserCircle, faClock);

storiesOf('Font Awesome', module)
  .add('Solid Icon - Star', () => <FontAwesomeIcon icon={['fas', 'star']} />)
  .add('Solid Icon - Times', () => <FontAwesomeIcon icon={['fas', 'times']} />)
  .add('Regular Icon - Star', () => <FontAwesomeIcon icon={['far', 'star']} />)
  .add('Regular Icon - Clock', () => <FontAwesomeIcon icon={['far', 'clock']} />)
  .add('Regular Icon - Thumbs Up', () => <FontAwesomeIcon icon={['far', 'thumbs-up']} />)
  .add('Icon Size - XS', () => <FontAwesomeIcon icon={['far', 'thumbs-up']} size="xs" />)
  .add('Icon Rotate - 90', () => <FontAwesomeIcon icon={['far', 'thumbs-up']} rotation={90} />)
  .add('Icon with color - red', () => <FontAwesomeIcon icon={['far', 'thumbs-up']} color="green" />)
  .add('Icon with color - #ccc', () => <FontAwesomeIcon icon={['far', 'thumbs-up']} color="#ccc" />)
  .add('With Styled Components', () => <StyledIcon icon={['far', 'thumbs-up']} color="#ccc" />)
  .add('Solid Icon - User', () => <FontAwesomeIcon icon={['fas', 'user-circle']} color="#ccc" />);
