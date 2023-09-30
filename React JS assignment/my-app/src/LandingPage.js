import React, { useState } from "react";
import JobDetails from "./JobDetails";

const LandingPage = () => {
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.github.com/search/jobs?q=${programmingLanguage}`
    );
    const data = await response.json();

    setJobs(data.items);
  };

  const handleViewJobDetails = async (job) => {
    const response = await fetch(job.url);
    const data = await response.json();

    setSelectedJob(data);
  };

  return (
    <div>
      <h1 className="text-center">What programming language are you looking for a job in?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a programming language"
          value={programmingLanguage}
          onChange={(e) => setProgrammingLanguage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <a href="#" onClick={() => handleViewJobDetails(job)}>
              {job.title}
            </a>
          </li>
        ))}
      </ul>

      {selectedJob && (
        <div>
          <JobDetails job={selectedJob} />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
