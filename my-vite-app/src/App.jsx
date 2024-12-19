import './app.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import SearchResults from './components/SearchResult';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/searchResult" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
