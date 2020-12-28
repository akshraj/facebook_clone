import './App.css';
import Header from './Header';
import SideBar from './components/body/sidebar/SideBar';
import Feed from './components/body/Feed/Feed';
import Widget from "./components/body/widgets/Widget";
import Login from './components/Login/Login';
import { useStateValue } from './ContextApi/provider';

function App() {
  const [ { user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {!user ? <Login /> : (
      <>
      <Header />
        <div className='app__body'>
          <SideBar />
          <Feed />
        </div>
      </>
      )}
    </div>
  );
}

export default App;
