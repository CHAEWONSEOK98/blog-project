// react-router
import { Routes, Route, Outlet } from 'react-router-dom';

// component
import Navbar from './components/layout/navbar/Navbar';

// page
import HomePage from './pages/home/HomePage';
import MyPage from './pages/MyPage';
import WritePage from './pages/WritePage';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/my" element={<MyPage />} />
      </Route>

      <Route path="/write" element={<WritePage />} />
    </Routes>
  );
}

export default App;
