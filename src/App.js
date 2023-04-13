import axios from "axios";
import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    axios.get("http://localhost:3001/posts").then()
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;