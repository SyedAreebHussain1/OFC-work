import './App.css';
import Sitebar from './components/Sitebar';
import { BrowserRouter } from "react-router-dom";
// import AppRoute from './components/AppRoute';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AppRoute/> */}
        <Sitebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
