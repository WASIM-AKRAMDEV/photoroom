import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/navbar/Topbar';
import { Navigation } from './components/navigation/Navigation';



function App() {
  return (
    <div className="d-flex align-items-start">
      <Sidebar/>
      <div className='content position-relative'>
        <Topbar/>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
