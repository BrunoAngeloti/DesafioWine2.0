import React from 'react';
import type { AppProps } from 'next/app'

import '../Shared/styles/globals.css'

import store from '../Data/Redux/index'
import { Header } from '../components'
import { Provider } from 'react-redux'

const MyApp : React.FC<AppProps> = ({ Component, pageProps }) => {
  return ( 
      <Provider store={store}>
        <Header/>
        <Component { ...pageProps } />
      </Provider>
  )
}

export default MyApp