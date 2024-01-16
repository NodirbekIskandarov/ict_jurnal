import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './navbar.scss'
import flag from '../../assets/images/Flag.png'
function Navbar() {
  const [flags, setFlags] = useState(flag)
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={logo} alt="ict jurnal logo" />
          </div>
          <div className="search">
            <label>
              <input placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.33337 1.33301C10.6454 1.33301 13.3334 4.02101 13.3334 7.33301C13.3334 10.645 10.6454 13.333 7.33337 13.333C4.02137 13.333 1.33337 10.645 1.33337 7.33301C1.33337 4.02101 4.02137 1.33301 7.33337 1.33301ZM7.33337 11.9997C9.91137 11.9997 12 9.91101 12 7.33301C12 4.75434 9.91137 2.66634 7.33337 2.66634C4.75471 2.66634 2.66671 4.75434 2.66671 7.33301C2.66671 9.91101 4.75471 11.9997 7.33337 11.9997ZM12.99 12.047L14.876 13.9323L13.9327 14.8757L12.0474 12.9897L12.99 12.047Z"
                  fill="#E2E3E6"
                />
              </svg>
            </label>
          </div>
          <div className="menus">
            <Link className="link" to='/'>Asosiy</Link>
            <Link className="link" to='/'>Konferensiya</Link>
            <Link className="link" to='/'>Biz haqimizda</Link>
            <Link className="link" to='/'>Aloqa</Link>
          </div>
          <div className="translations">
            <select>
              <option>UZ</option>
              <option>RU</option>
              <option>EN</option>
            </select>
            <img src={flags} alt="flag"/>
          </div>
          <div className="registration">
            <button className="login">Login</button>
            <button className="signup"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 22H18V20C18 19.2044 17.6839 18.4413 17.1213 17.8787C16.5587 17.3161 15.7956 17 15 17H9C8.20435 17 7.44129 17.3161 6.87868 17.8787C6.31607 18.4413 6 19.2044 6 20V22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13ZM12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z" fill="white"/>
</svg>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
