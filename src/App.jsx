import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home'

const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}


const App = () => {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
