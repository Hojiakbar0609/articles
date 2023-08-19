import React, { Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'
import { FaTelegramPlane, FaInstagram,FaYoutube } from 'react-icons/fa'
function RoutLayout() {
  return (
    <>
        <header>
            <nav>
            <h1>My Articles</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <BreadCrumbs/>
        </header>
        <main>
            <Outlet/>
            <div className="social">
              <NavLink className="icons" to="https://t.me/Haydarov_06_09"><FaTelegramPlane/></NavLink>
              <NavLink className="icons" to="https://www.instagram.com/_hojiakbar_haydarov__/"><FaInstagram/></NavLink>
              <NavLink className="icons" to="https://www.youtube.com/@akhrorweb"><FaYoutube/></NavLink>
            </div>
        </main>
        <footer>
          <h3 className='footer-title'>Reserved by Haydarov Hojiakbar</h3>
        </footer>
    </>
  )
}

export default RoutLayout