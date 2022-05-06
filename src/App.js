import './client/assets/styles/_styles.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './client/components/containers/Navbar';
import Footer from './client/components/containers/Footer';
import LandingPage from './client/components/views/LandingPage';
import LoginPage from './client/components/views/LoginPage';
import RegisterPage from './client/components/views/RegisterPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={LandingPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/login' component={LoginPage} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
