import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import MainPage from './components/mainPage/MainPage';
import './App.css';
import Members from './components/members/Members';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path='/members'
          element={<Members/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
