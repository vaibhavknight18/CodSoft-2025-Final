import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import Card from "src/components/Card.jsx";

export default function HomePage() {
  const { jobs } = useApp();
  return (
    <div className="container">
      <h1>Welcome to JobBoard</h1>
      <p>Find jobs and apply easily.</p>
      <h2>Featured Jobs</h2>
      {jobs.slice(0, 2).map(j => (
        <Card key={j.id}>
          <h3>{j.title}</h3>
          <p>{j.company} - {j.location}</p>
          <Link to={`/jobs/${j.id}`}>View Details</Link>
        </Card>
      ))}
    </div>
  );
}
