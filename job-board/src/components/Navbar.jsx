import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">JobBoard</Link>
      <div>
        <Link to="/jobs">Jobs</Link>
        <Link to="/employer">Employer</Link>
        <Link to="/candidate">Candidate</Link>
      </div>
    </nav>
  );
}
