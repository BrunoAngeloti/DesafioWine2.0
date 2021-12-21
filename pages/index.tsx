import type { NextPage } from 'next'

import Head from 'next/head'

import  Home  from './home'

const App:NextPage  = () => {
  
  
  return (
    <div>
      <Head>
        <title>Wine | Compre vinhos online com descontos exclusivos!</title>
        <meta name="description" content="Vinho tinto, rosé, branco ou espumante. Na Wine, você encontra os melhores rótulos pelos menores preços. Acesse a loja ou baixe nosso aplicativo!" />
        <link rel="icon" href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/favicon.ico" />
      </Head>
      <Home page={1}/>
    </div>
  )
}

export default App
