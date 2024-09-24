import React from 'react'
import Navbar from '../Pages/Navbar/Navbar'

const HomeImagePage = ({children}) => {
  return (
    <div className="home-page">
        <Navbar />
        {children}
        </div>
  )
}

export default HomeImagePage