import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const JobDetails = ({ job }) => {
  const [isApplying, setIsApplying] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetterNote, setCoverLetterNote] = useState("");
  const [file, setFile] = useState("");
  const [applicationData, setApplicationData] = useState({});

  const handleApply = async () => {
    if (!name || !email || !coverLetterNote || !file) {
      return;
    }
    setApplicationData({
      name,
      email,
      coverLetterNote,
      file,
    });
  };

  return (
    <div>
      <h2>Job Details</h2>
      <p>Title: {job.title}</p>
      <p>Description: {job.description}</p>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>

      <form onSubmit={handleApply}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Cover Letter Note"
          value={coverLetterNote}
          onChange={(e) => setCoverLetterNote(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" disabled={isApplying}>Apply</button>
      </form>

      {isApplying && (
        <div>
          <SuccessPage applicationData={applicationData} />
        </div>
      )}
    </div>
  );
};

const SuccessPage = ({ applicationData }) => {
  const { name, email, coverLetterNote, file } = applicationData;

  return (
    <div>
      <h2>Application Success</h2>
      <p>Thank you for your application, {name}!</p>
      <p>We will be in touch soon.</p>

      <pre>{applicationData}</pre>
    </div>
  );
};

const App = () => {
  const [jobs, setJobs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.github.com/search/jobs?q=${programmingLanguage}`
    );
    const data = await response.json();

    setJobs(data.items);
  };

  return (
    <Router>
      <div>
        <h1>Job Application</h1>
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
              <Link to={`/${job.id}`}>{job.title}</Link>
            </li>
          ))}
        </ul>

        <Route path="/:jobId">
          <JobDetails job={jobs.find((job) => job.id === parseInt(jobId))} />
        </Route>
      </div>
    </Router>
  );
};

export default App;
