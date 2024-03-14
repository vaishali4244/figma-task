import { Route, Routes } from 'react-router-dom';
import Screen from './screens/screen';
import './App.css';

function App() {
  return (
    // <div className="app-container">
    <Routes>
      <Route path='/' element={<Screen />} />
    </Routes>
    // </div>
  );
}

export default App;
