import logo from './logo.svg';
import './App.css';
import AddVehicle from './components/AddVehicle';
import SearchVehicle from './components/SearchVehicle';
import DeleteVehicle from './components/DeleteVehicle';
import ViewVehicle from './components/ViewVehicle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddVehicle/>}/>
        <Route path='/search' element={<SearchVehicle/>}/>
        <Route path='/delete' element={<DeleteVehicle/>}/>
        <Route path='/view' element={<ViewVehicle/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
