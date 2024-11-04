
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './page/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
function App() {
  return (
     <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/addUser' element={<AddUser/>} />
        <Route exact path='/edit/:id' element={<EditUser/>} />
      </Routes>

      </Router>
   
      
     </div>   
  );
}

export default App;
