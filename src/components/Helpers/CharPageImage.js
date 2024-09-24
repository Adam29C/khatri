import React from 'react'
import Navbar from '../Pages/Navbar/Navbar'
import Footer from '../Pages/Footer/Footer'

const CharPageImage = ({children}) => {
  return (
    <div className="chart-home-page">
  <Navbar />
  {children}
  <Footer />
  </div>
  )
}

export default CharPageImage