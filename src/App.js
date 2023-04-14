import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import Home from './pages/Home';
import Createpost from './pages/Createpost'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to= "/createpost">Create  a post</Link>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/createpost" exact element={<Createpost/>} />
          </Routes>
      </Router> 
    </div>
  )
}

export default App;