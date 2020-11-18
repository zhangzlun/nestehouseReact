import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../components/Footer';
import Provider from './Provider';

const withProvider = (story) => <Provider>{story()}</Provider>;

storiesOf('Footer', module)
    .addDecorator(withProvider)
    .add('default', () => <Footer />);
