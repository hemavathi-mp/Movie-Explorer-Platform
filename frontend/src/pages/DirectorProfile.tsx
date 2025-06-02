import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DirectorProfile() {
  const { id } = useParams();
  const [director, setDirector] = useState<any>(null);

  useEffect(() => {
    axios.get(`/directors/${id}`).then(res => setDirector(res.data));
  }, [id]);

  if (!director) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Director: {director.name}</h2>
      <h3 className="text-xl font-semibold">Movies:</h3>
      <ul className="space-y-2">
        {director.movies.map((movie: any) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="text-blue-600 hover:underline">
              {movie.title} ({movie.release_year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
