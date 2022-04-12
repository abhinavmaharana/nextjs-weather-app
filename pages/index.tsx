import type { NextPage } from 'next'
import Head from 'next/head';
import SearchBox from '../components/SearchBox';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          {/* Search Bar */}
          <SearchBox />
        </div>
      </div>
    </div>
  )
}

export default Home
