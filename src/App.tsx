import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './homepage/LandingPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
