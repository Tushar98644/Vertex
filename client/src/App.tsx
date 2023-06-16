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

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Minutes />} />
        <Route  path="/add-minutes" element={<Add_minutes />} />
        <Route  path="/gallery" element={<Gallery />} />
        <Route  path="/college-list" element={<College_List />} />
        <Route  path="/school-list" element={<School_List />} />
        <Route  path="/update/:id" element={<Edit_Modal />} />
      </Routes>
    </Router>
  );
};


export default App
