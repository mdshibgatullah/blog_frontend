import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const Layouts = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layouts