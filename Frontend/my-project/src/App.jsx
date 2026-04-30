import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import YourWatchList from './pages/YourWatchList';
import SharedWatchList from './pages/SharedWatchList';

function App() {
  return(
    <Router>
      <div className="min-h-screen bg-gray-100">

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/watchlist" element={<YourWatchList/>} />
          <Route path="/sharedwatchlist" element={<SharedWatchList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App