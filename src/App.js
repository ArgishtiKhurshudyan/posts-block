import Posts from "./components/posts/Posts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./components/Profile";
import {useState} from "react";


function App() {
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts setSelectedItem={setSelectedItem}/>}/>
          <Route path="/profile" element={<Profile data={selectedItem}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
