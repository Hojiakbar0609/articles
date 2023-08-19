import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function ContactLayout() {
  return (
    <div>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut, quo, deserunt fugiat rerum fuga et aspernatur eum numquam id adipisci beatae qui porro voluptate at voluptatum laborum soluta magnam voluptates saepe. Commodi harum corrupti, doloribus velit veniam necessitatibus laudantium vel consequuntur temporibus! Dicta sequi ipsa cupiditate est iure neque.</p>
        <nav>
            <NavLink to="faq">Faq</NavLink>
            <NavLink to="form">Form</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default ContactLayout