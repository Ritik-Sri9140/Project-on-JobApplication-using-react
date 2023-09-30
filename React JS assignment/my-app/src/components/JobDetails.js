import React, { useState } from 'react';

const JobDetails = ({ job }) => {
  const [isApplying, setIsApplying] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetterNote, setCoverLetterNote] = useState('');
  const [file, setFile] = useState('');
  const [applicationPreview, setApplicationPreview] = useState('');

  const handleApply = async () => {

    setApplicationPreview(`
      Name: ${name}
      Email: ${email}
      Cover Letter Note: ${coverLetterNote}
      Resume: ${file.name}
    `);

    setIsApplying(true);
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
          <h2>Application Preview</h2>
          <pre>{applicationPreview}</pre>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
