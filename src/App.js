import LandingPage from './client/components/views/LandingPage';
import Navbar from './client/components/containers/Navbar';
import Footer from './client/components/containers/Footer';
import './client/assets/styles/_styles.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
