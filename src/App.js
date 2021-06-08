import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <>
    <Header />
    <div className="app-wrapper">
      <Navbar />
      <Profile />
    </div>
  </>
);

export default App;
