import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from './store';
import '../styles/globals.css';
import '../styles/AppStyles.css'; 
import '../styles/ChatInterface.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;