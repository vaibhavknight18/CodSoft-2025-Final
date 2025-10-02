import { useParams } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import Card from "src/components/Card.jsx";
import Button from "src/components/Button.jsx";

export default function JobDetailPage() {
  const { id } = useParams();
  const { jobs } = useApp();
  const job = jobs.find(j => j.id === id);

  if (!job) return <div className="container"><Card>Job not found</Card></div>;

  return (
    <div className="container">
      <Card>
        <h1>{job.title}</h1>
        <p>{job.company} - {job.location}</p>
        <p>{job.description}</p>
        <Button>Apply</Button>
      </Card>
    </div>
  );
}
