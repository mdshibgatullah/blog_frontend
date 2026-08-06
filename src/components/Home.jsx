import React from 'react'
import Layouts from './common/Layouts'
import Hero from './common/Hero';
import Category from './common/Category';
import LatestArticles from './common/LatestArticles';
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