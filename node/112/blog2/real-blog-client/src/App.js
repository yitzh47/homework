import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import AddPost from './AddPost';
import NotFound from './NotFound';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
