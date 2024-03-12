import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar';
import './App.css'
import LiveStream from './Components/LiveStream/LiveStream';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <SideBar />
        <LiveStream />
      </div>
    </div>
  );
}

export default App;
