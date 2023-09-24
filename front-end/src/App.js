import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Main';
import Header from './Header';
import CreateAccount from './createAccount';
import Login from './login';
import Profile from './profile';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/create' element={<CreateAccount />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Profil' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
