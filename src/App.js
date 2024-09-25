
import { Route, Routes } from 'react-router-dom';
import './App.css';

import CustomRouters from './Router/CustomRouters';
import AdminRouters from './Router/AdminRouters';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CustomRouters />}></Route>
        <Route path='admin/*' element={<AdminRouters />}></Route>
      </Routes>

    </div>
  );
}

export default App;
