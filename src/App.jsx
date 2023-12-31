import { useState } from 'react'
import './App.css'

// react-router-dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layouts
import RoutLayout from './layout/RoutLayout'
import ArticlesLayout from './layout/ArticlesLayout'
import ContactLayout from './layout/ContactLayout'


// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Form from './pages/help/Form'
import PageNotFound from './pages/PageNotFound'
import Articles from './pages/articles/Articles'
import ArticlesDetail from './pages/articles/ArticlesDetail'


function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RoutLayout/>}>
          <Route path='/' index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<ContactLayout/>}>
            <Route path='faq' element={<Faq/>}/>
            <Route path='form' element={<Form/>}/>
          </Route>

          <Route path='articles' element={<ArticlesLayout/>}>
            <Route index element={<Articles/>}/>
            <Route path=':id' element={<ArticlesDetail/>}/>
          </Route>

          {/* Page Not Found */}
          <Route path='*' element={<PageNotFound/>}/>
      </Route>
    )
  )
  return (
    <div className='App'>
        <RouterProvider router={routes}/>
      </div>
  )
}

export default App
