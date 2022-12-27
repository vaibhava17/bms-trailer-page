import React from 'react'

// TODO: styling

const Navbar = (props) => {
  const { onSearch, ...rest } = props

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo col-3">
          <a href="/">Logo</a>
        </div>
        <div className="navbar__search col-5">
          <input
            type="text"
            placeholder="Search"
            className='search__input'
            onChange={(e) => onSearch(e.target.value)}
            {...rest}
          />
        </div>
        <div className="navbar__menu col-4">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar