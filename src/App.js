import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import AboutPage from './pages/about';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        {/* <Route path="/" element={<SignIn />} /> */}
      </Routes>
    </>
  );
}

export default App;
