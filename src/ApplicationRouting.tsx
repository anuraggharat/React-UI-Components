import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ModalPage from './pages/uicomponents/ModalPage'
export default function ApplicationRouting() {
  return (
    <Router>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<ModalPage />} path='/components/modal' />
        </Routes>
      </Router>
  )
}
