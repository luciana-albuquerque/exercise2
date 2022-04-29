import LandingPage from './client/components/views/LandingPage';
import Navbar from './client/components/containers/Navbar';
import Footer from './client/components/containers/Footer';
import Alert from './client/components/general/Alert';
import './client/assets/styles/_styles.scss'

function App() {
  return (
    <div className="App">
      <Alert />
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
