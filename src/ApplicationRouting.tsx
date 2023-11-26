import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ModalPage from './pages/uicomponents/Modal/ModalPage'
import SlideModal from './pages/uicomponents/SlideModal/SlideModal'
import CollapseFolders from './pages/uicomponents/CollapseFolders/Index'
import Pagination from './pages/uicomponents/Pagination/Index'
import StopWatch from './pages/uicomponents/StopWatch/Index'

export default function ApplicationRouting() {
  return (
    <Router>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<ModalPage />} path='/components/modal' />
          <Route element={<SlideModal />} path='/components/slidemodal' />
          <Route element={<CollapseFolders />} path='/components/collapseFolders' />
          <Route element={<Pagination />} path='/components/pagination' />
          <Route element={<StopWatch />} path='/components/stopwatch' />


        </Routes>
      </Router>
  )
}
