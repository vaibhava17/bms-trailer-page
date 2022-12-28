import React from 'react'
import logo from '../../assets/images/bms-logo.svg'

const Navbar = (props) => {
  const { onSearch, ...rest } = props

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <a href="/">
            <img src={logo} alt="logo" loading='lazy' />
          </a>
        </div>
        <div className="navbar__search">
          <i className='fas fa-search search__icon'></i>
          <input
            type="text"
            placeholder="Search for a Movie, Show and More"
            className='search__input'
            onChange={(e) => onSearch(e.target.value)}
            {...rest}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar