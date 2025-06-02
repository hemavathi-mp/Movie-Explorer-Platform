export default function ActorProfile() {
  return <div className="p-4">Actor Profile Page (to be implemented)</div>;
}
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ActorProfile() {
  const { id } = useParams();
  const [actor, setActor] = useState<any>(null);

  useEffect(() => {
    axios.get(`/actors/${id}`).then(res => setActor(res.data));
  }, [id]);

  if (!actor) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Actor: {actor.name}</h2>
      <h3 className="text-xl font-semibold">Movies:</h3>
      <ul className="space-y-2">
        {actor.movies.map((movie: any) => (
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
