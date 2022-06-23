import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

function Header() {
  const history = useHistory();

  return (
    <div className="header">
      <div className="header__home" onClick={() => history.push("/")}>
        Test
      </div>
      <div className="header__options">
        <div className="header__option" onClick={() => history.push("/works")}>
          Works
        </div>
        <div className="header__option" onClick={() => history.push("/bio")}>
          Bio
        </div>
        <div className="header__option" onClick={() => history.push("/contacts")}>
          Contacts
        </div>
      </div>
    </div>
  )
}

export default Header
