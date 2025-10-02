import { useState } from "react";
import { useApp } from "../context/AppContext";
import Card from "src/components/Card.jsx";
import Input from "src/components/Input.jsx";
import { Link } from "react-router-dom";

export default function JobsPage() {
  const { jobs } = useApp();
  const [query, setQuery] = useState("");
  const filtered = jobs.filter(j => j.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container">
      <Input placeholder="Search jobs" value={query} onChange={e => setQuery(e.target.value)} />
      {filtered.map(job => (
        <Card key={job.id}>
          <Link to={`/jobs/${job.id}`}><strong>{job.title}</strong></Link>
          <p>{job.company} – {job.location}</p>
        </Card>
      ))}
    </div>
  );
}
