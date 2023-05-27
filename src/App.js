import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import './components/MainDash/MainDash.css';

function App() {
  return (
    <div className="App">
      <div className="AppAfter">
        <Sidebar />
        <div className="MainDash">
          <MainDash />
        </div>
      </div>
    </div>
  );
}

export default App;
