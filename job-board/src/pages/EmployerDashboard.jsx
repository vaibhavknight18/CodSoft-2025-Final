import { useState } from "react";
import { useApp } from "../context/AppContext";
import Card from "src/components/Card.jsx";
import Input from "src/components/Input.jsx";
import Button from "src/components/Button.jsx";

export default function EmployerDashboard() {
  const { jobs, setJobs } = useApp();
  const [form, setForm] = useState({ title: "", company: "", location: "" });

  function postJob(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    setJobs([{ id, ...form, description: "New job" }, ...jobs]);
    setForm({ title: "", company: "", location: "" });
  }

  return (
    <div className="container">
      <h2>Post a Job</h2>
      <form onSubmit={postJob}>
        <Input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <Input placeholder="Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
        <Input placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
        <Button type="submit">Publish</Button>
      </form>

      <h3>Existing Jobs</h3>
      {jobs.map(j => <Card key={j.id}>{j.title} - {j.company}</Card>)}
    </div>
  );
}
