import React from 'react'

const Navbar = (props) => {
  const { onSearch } = props
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo col-3">
          <a href="/">Logo</a>
        </div>
        {/* search */}
        <div className="navbar__search col-5">
          <input
            type="text"
            placeholder="Search"
            className='search__input'
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        {/* menu */}
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