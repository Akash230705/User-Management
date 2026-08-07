import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserDetailPage from './pages/UserDetailPage';
import UserView from './components/UserView';

// If Page Not Found This 404 Page should be displayed for unmatched routes.
function NotFound() {
  return (
    <div className="container" style={{ padding: '64px 24px', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p style={{ color: 'var(--color-ink-faint)', margin: '8px 0 20px' }}> That page doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/users/view/:id" element={<UserView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
