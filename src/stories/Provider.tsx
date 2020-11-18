import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/StyledComponents/globalStyle';
import setupStore from '~/store';
import theme from '~/theme';
import StoryGlobalStyle from '~/components/StyledComponents/storyGlobalStyle';

const store = setupStore();

const ProviderWrapper = ({ children }) => (
  <Provider store={store}>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StoryGlobalStyle />
          {children}
        </ThemeProvider>
    </Provider>
);

export default ProviderWrapper;
