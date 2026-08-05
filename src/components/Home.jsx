import React from 'react'
import Layouts from './Layouts'
import Hero from './Hero';
import Category from './Category';
import LatestArticles from './LatestArticles';
// import Articles from './Articles';


const Home = () => {
  return (
    <Layouts>
        <main className="w-100 overflow-hidden">
          <Hero />
          <Category />
          <LatestArticles />
        </main>
      </Layouts>
  )
}

export default Home