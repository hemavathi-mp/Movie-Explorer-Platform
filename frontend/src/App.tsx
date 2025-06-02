import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import ActorProfile from './pages/ActorProfile';
import DirectorProfile from './pages/DirectorProfile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/actors/:id" element={<ActorProfile />} />
      <Route path="/directors/:id" element={<DirectorProfile />} />
    </Routes>
  );
}
