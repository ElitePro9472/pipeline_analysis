import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './container/Layout';
import Login from './pages/Login';
// import Register from './pages/Register';
import LegacyRegister from './pages/LegacyRegister';
import Forgot from './pages/Forgot';
import Chart from './pages/Chart';
// import FileInstruction from './pages/FileInstruction';
import Salesforce from './pages/Salesforce';
import HubSpot from './pages/Hubspot';
import MicrosoftDynamics365 from './pages/MicrosoftDynamics365';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {
            isAuthenticated ?
              <>
                <Route path="/login" element={<Home />} />
                <Route path="/register" element={<Home />} />
              </> :
              <>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<LegacyRegister />} />
              </>
          }
          <Route path="/forgot" element={<Forgot />} />
          <Route path='/chart' element={<Chart />} />
          {/* <Route path='/instruction' element={window.open('/instruction.html', '_blank')} /> */}
          <Route path='/salesforce' element={<Salesforce />} />
          <Route path='/hubspot' element={<HubSpot />} />
          <Route path='/microsoftdynamics365' element={<MicrosoftDynamics365 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
