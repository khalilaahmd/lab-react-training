import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import ShowHide from './components/ShowHide';

function App() {
  return (
    <div className="App">
    <div className="title">
      ID Card:
      <ShowHide>
      <IdCard />
      </ShowHide>
    </div>

    </div>
  );
}

export default App;
