import './App.css'
import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CreatePage from './pages/CreatePage'
// import toast from 'react-hot-toast'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </>
  )
}

export default App
