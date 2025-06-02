import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  release_year: number;
  genres: { name: string }[];
  director: { id: number, name: string };
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filters, setFilters] = useState({ genre: '', actor: '', director: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError('');
      try {
        const params = new URLSearchParams(Object.entries(filters).filter(([_, v]) => v));
        const res = await axios.get(`/movies?${params.toString()}`);
        setMovies(res.data);
      } catch {
        setError('Failed to load movies.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [filters]);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Movie Explorer</h1>

      <div className="flex gap-4">
        <input type="text" placeholder="Genre" className="border p-1"
          onChange={(e) => setFilters(f => ({ ...f, genre: e.target.value }))} />
        <input type="text" placeholder="Actor" className="border p-1"
          onChange={(e) => setFilters(f => ({ ...f, actor: e.target.value }))} />
        <input type="text" placeholder="Director" className="border p-1"
          onChange={(e) => setFilters(f => ({ ...f, director: e.target.value }))} />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id} className="border p-4 rounded shadow">
            <Link to={`/movies/${movie.id}`} className="text-lg font-semibold hover:underline">
              {movie.title} ({movie.release_year})
            </Link>
            <div>Genres: {movie.genres.map(g => g.name).join(', ')}</div>
            <div>
              Director: <Link to={`/directors/${movie.director.id}`} className="text-blue-600 hover:underline">
                {movie.director.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
