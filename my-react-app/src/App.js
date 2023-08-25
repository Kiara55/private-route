import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import signup from './components/signup';
import header from './components/header';
import {useAuth, AuthProvider} from './components/Auth';
import Authwrap from './wrap/AuthWrap' ;
import Dashboard from './components/Dashboard' ;
function App() {
  return (
    <div className="App">
            <Header />

<AuthProvider>
 <Routes>
   <Route path='/dashboard' element={<AuthWrapper condition={auth} children = {<Dashboard/>} />} />
   <Route path='/signup' element={<signup />} />
   <Route path='/private' element={<Dashboard2 />} />
 </Routes>
</AuthProvider>
</div>


);
}
      
    </div>
  );
}

export default App;
