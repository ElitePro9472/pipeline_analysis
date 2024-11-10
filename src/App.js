import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './container/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import LegacyRegister from './pages/LegacyRegister';
import Forgot from './pages/Forgot';
import Chart from './pages/Chart';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/legacy-register" element={<LegacyRegister />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path='/chart' element={<Chart />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
