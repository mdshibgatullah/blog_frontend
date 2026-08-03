import React from 'react'
import Layouts from './Layouts'
import Hero from './Hero';
import Category from './Category';
import Articles from './Articles';


const Home = () => {
  return (
    <Layouts>
        <main className="w-100 overflow-hidden">
          <Hero />
          <Category />
          <Articles />
        </main>
      </Layouts>
  )
}

export default Home