import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm </h5>
        <h1>Raymond</h1>
        <h5 className="text-light">Software Engineer</h5>
      </div>
    </header>
  )
}

export default Header