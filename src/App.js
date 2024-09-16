
import { Route, Routes } from 'react-router-dom';
import './App.css';

import CustomRouters from './Router/CustomRouters';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CustomRouters />}></Route>
      </Routes>

    </div>
  );
}

export default App;
