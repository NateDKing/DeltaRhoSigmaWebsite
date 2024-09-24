import { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import './App.css'

import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} />
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
