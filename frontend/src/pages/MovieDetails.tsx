import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    axios.get(`/movies/${id}`).then(res => setMovie(res.data));
  }, [id]);

  if (!movie) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{movie.title} ({movie.release_year})</h2>
      <p>Director: <Link to={`/directors/${movie.director.id}`} className="text-blue-600">{movie.director.name}</Link></p>
      <p>Genres: {movie.genres.map((g: any) => g.name).join(', ')}</p>
      <p>Cast: {movie.actors.map((a: any) => (
        <Link key={a.id} to={`/actors/${a.id}`} className="text-blue-600 mr-2">{a.name}</Link>
      ))}</p>
    </div>
  );
}
