import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Video from './components/Video';
function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/image' element={<Image/>}/>
            <Route path='/video' element={<Video/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
