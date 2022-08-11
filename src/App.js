import React from 'react'
import './App.css'
import { Home, About, Events, Products, Contact, Whoops404, Services, History, Location } from './pages'
import { Route, Routes } from 'react-router'
import { useRoutes, Navigate } from 'react-router-dom'
import { ColorProvider } from './hooks'
import { AddColorForm, ColorDetails, ColorList } from './components'

function App() {
  // let element = useRoutes([
  //   { path: '/', element: <Home /> },
  //   {
  //     path: 'about',
  //     element: <About />,
  //     children: [
  //       { path: 'services', element: <Services /> },
  //       { path: 'history', element: <History /> },
  //       { path: 'location', element: <Location /> }
  //     ]
  //   },
  //   { path: 'events', element: <Events /> },
  //   { path: 'products', element: <Products /> },
  //   { path: 'contact', element: <Contact /> },
  //   { path: '*', element: <Whoops404 /> },
  //   { path: 'services', element: <Navigate to="/about/services" /> }
  // ])

  // return element

  // return <div>{element}</div>

  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  )
}

export default App
