import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
// import toast from 'react-hot-toast'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;
