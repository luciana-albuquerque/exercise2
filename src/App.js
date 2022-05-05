import './client/assets/styles/_styles.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from './client/components/views/LandingPage';
import Navbar from './client/components/containers/Navbar';
import Footer from './client/components/containers/Footer';
import LoginPage from './client/components/views/LandingPage/LoginPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={LandingPage} /> {/* //exact? */}
      <Route path='/login' component={LoginPage} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
