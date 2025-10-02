import React, { createContext, useState, useEffect, useContext } from "react";

const AppCtx = createContext();
export const useApp = () => useContext(AppCtx);

const LS_KEYS = {
  JOBS: "jobboard.jobs",
  PROFILE: "jobboard.candidate.profile",
};

const seedJobs = [
  { id: "1", title: "Frontend Engineer", company: "Acme Corp", location: "Bengaluru, IN", description: "Build React UIs" },
  { id: "2", title: "Backend Developer", company: "Nimbus Tech", location: "Hyderabad, IN", description: "Work on APIs" },
];

export function AppProvider({ children }) {
  const [jobs, setJobs] = useState(() => JSON.parse(localStorage.getItem(LS_KEYS.JOBS)) || seedJobs);
  const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem(LS_KEYS.PROFILE)) || { name: "", email: "" });

  useEffect(() => localStorage.setItem(LS_KEYS.JOBS, JSON.stringify(jobs)), [jobs]);
  useEffect(() => localStorage.setItem(LS_KEYS.PROFILE, JSON.stringify(profile)), [profile]);

  return (
    <AppCtx.Provider value={{ jobs, setJobs, profile, setProfile }}>
      {children}
    </AppCtx.Provider>
  );
}
