import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ModalPage from './pages/uicomponents/Modal/ModalPage'
import SlideModal from './pages/uicomponents/SlideModal/SlideModal'
import CollapseFolders from './pages/uicomponents/CollapseFolders/Index'
import Pagination from './pages/uicomponents/Pagination/Index'
import StopWatch from './pages/uicomponents/StopWatch/Index'
import CustomerQueue from './pages/uicomponents/CustomerQueue/Index'
import ProgressBar from './pages/uicomponents/ProgressBar/Index'
import Layout from './components/Layout'
import GridLights from './pages/uicomponents/GridLights/Index'
import EMICalculator from './pages/smallapps/EMICalculator/Index'
import ShoppingCart from './pages/uicomponents/ShoppingCart/Index'
import TicTacToe from './pages/smallapps/TicTacToe/Index'
import StarRating from './pages/uicomponents/starrating/Index'
import Accordian from './pages/uicomponents/Accordian/Index'

export default function ApplicationRouting() {
  return (
    <Router>
        <Routes>
          <Route element={<Layout />}>
          <Route element={<Home />} path='/' />
          <Route element={<ModalPage />} path='/components/modal' />
          <Route element={<SlideModal />} path='/components/slidemodal' />
          <Route element={<CollapseFolders />} path='/components/collapseFolders' />
          <Route element={<Pagination />} path='/components/pagination' />
          <Route element={<StopWatch />} path='/components/stopwatch' />
          <Route element={<CustomerQueue />} path='/components/customerqueue' />
          <Route element={<ProgressBar />} path='/components/progressbar' />
          <Route element={<GridLights />} path='/components/gridlights' />
          <Route element={<ShoppingCart />} path='/components/shoppingcart' />
          <Route element={<EMICalculator />} path='/smallapps/emicalculator' />
          <Route element={<TicTacToe />} path='/smallapps/tictactoe' />
          <Route element={<StarRating />} path='/components/starrating' />
          <Route element={<Accordian />} path='/components/accordian' />




          </Route>
        </Routes>
      </Router>
  )
}
