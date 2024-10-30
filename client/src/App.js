import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext'; 
import ProtectedRoute from './contexts/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={
            <ProtectedRoute>
          
            </ProtectedRoute>
          } />
          <Route path='/register' element={
              <Register />
          } />
            <Route path='/home' element={
              <Home />
          } />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;