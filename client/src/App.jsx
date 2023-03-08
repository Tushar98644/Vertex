import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Minutes from './Pages/Minutes';
import Add_minutes from './Pages/Add_minutes';
import Gallery from './Pages/Gallery';
import College_List from './Pages/College_list';
import School_List from './Pages/School_list';
import Minute_modal from './components/Modals/Minute_modal';
import Edit_Modal from './Pages/EditModal';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// bootstrap can also be used for styling of mdb-react-ui-kit components

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Minutes/>} />
        <Route exact path="/add-minutes" element={<Add_minutes/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route exact path="/college-list" element={<College_List/>} />
        <Route exact path="/school-list" element={<School_List/>} />
        <Route exact path="/update/:id" element={<Edit_Modal/>} />
      </Routes>
    </Router>
  )
}

export default App
