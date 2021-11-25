import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import  Home  from './Home'
import { Header } from '../components/Header'

const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wine | Compre vinhos online com descontos exclusivos!</title>
        <meta name="description" content="Vinho tinto, rosé, branco ou espumante. Na Wine, você encontra os melhores rótulos pelos menores preços. Acesse a loja ou baixe nosso aplicativo!" />
        <link rel="icon" href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}

export default App
