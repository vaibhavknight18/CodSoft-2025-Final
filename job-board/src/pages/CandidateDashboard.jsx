import { useState } from "react";
import { useApp } from "../context/AppContext";
import Input from "src/components/Input.jsx";
import Button from "src/components/Button.jsx";

export default function CandidateDashboard() {
  const { profile, setProfile } = useApp();
  const [form, setForm] = useState(profile);

  function saveProfile(e) {
    e.preventDefault();
    setProfile(form);
  }

  return (
    <div className="container">
      <h2>My Profile</h2>
      <form onSubmit={saveProfile}>
        <Input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <Input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
