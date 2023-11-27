import './App.css';

import PharmacyLogin from './components/login';
import PharmacyRegistration from './components/registration';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PharmacyWebsite from './components/manga';
function App() {
  return (
     <div>
      <Router>
        <Routes>
          <Route path='/' element={<PharmacyWebsite/>}/>
          <Route path='/login' element={<PharmacyLogin/>}/>
          <Route path='/reg' element={<PharmacyRegistration/>}/>
        </Routes>
      </Router>
     </div>
  );
}

export default App;