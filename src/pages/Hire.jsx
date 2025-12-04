import React, { useState } from 'react';
import './Hire.css';

const candidatesData = [
  {
    name: 'Shruti Sangvikar',
    skills: [
      'Java',
      'Hibernate',
      'Springboot',
      'Javascript',
      'Node.js',
      'React.js',
      'Express.js',
      'MongoDB',
      'Mysql',
      'Blockchain',
      'GenAI (LLMs, LangChain, RAG)',
    ],
    github: 'https://github.com/Shruti627',
    company: 'Google',
    package: '25 LPA',
  },
  {
    name: 'Amaan Mujawar',
    skills: [
      'C++',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'SQL',
      'Traccar',
      'ERPNext',
      'Gen AI',
      'RAG',
      'Firebase',
    ],
    github: 'https://github.com/Amaan-Mujawar',
    company: 'LTI MindTree',
    package: '22 LPA',
  },
  {
    name: 'Ninad Ubale',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Ionic with React',
      'Java',
      'Java Servlet & JSP',
      'Node.js',
      'Express.js',
      'MySQL',
      'MongoDB',
      'DSA',
      'RAG',
    ],
    github: 'https://github.com/NinadUbale',
    company: 'Amazon',
    package: '20 LPA',
  },
  {
    name: 'Sahil Inamdar',
    skills: [
      'Full Stack development',
      'Rest and GraphQL APIs',
      'MongoDB',
      'Mysql',
      'Express.js',
      'React.js',
      'Expo',
      'Angular',
      'Javascript',
      'Typescript',
      'Python',
      'Node.js',
      'Git',
      'GenAI (LLMs)',
    ],
    github: 'https://github.com/sahilinamdar-lang',
    company: 'Facebook',
    package: '18 LPA',
  },
  {
    name: 'Shyam Bharaskar',
    skills: [
      'JavaScript',
      'Typescript',
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Mongodb',
      'Bootstrap',
      'TailwindCSS',
      'Python',
    ],
    github: 'https://github.com/Sham1718',
    company: 'Apple',
    package: '13 LPA',
  },
  {
    name: 'Aditya Kadlag',
    skills: [
      'Java',
      'C++',
      'SQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Spring Boot',
      'AWS',
      'Docker',
      'Maven',
      'React',
      'Gen AI',
      'Next.Js',
    ],
    github: 'https://github.com/aditya-kadlag-07',
    company: 'IBM',
    package: '15 LPA',
  },
];

const Hire = () => {
  const [search, setSearch] = useState('');

  const filteredCandidates = candidatesData.filter((candidate) => {
    const searchLower = search.toLowerCase();
    return (
      candidate.name.toLowerCase().includes(searchLower) ||
      candidate.skills.join(' ').toLowerCase().includes(searchLower) ||
      candidate.company.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="hire-page">
      <h1>Our Smart Students</h1>

      {/* ================= SEARCH BAR ================= */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, skills, or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ================= CANDIDATES GRID ================= */}
      <div className="candidates-container">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((c, index) => (
            <div className="candidate-card" key={index}>
              <h2>{c.name}</h2>
              <p>
                <strong>Company:</strong> {c.company}
              </p>
              <p>
                <strong>Package:</strong> {c.package}
              </p>
              <h3>Skills:</h3>
              <p>{c.skills.join(', ')}</p>
              <div className="links">
                <a href={c.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-result">No candidates found.</p>
        )}
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="hire-footer">
        <p>
          Office no.19, 8rd Floor, Lotus Complex, Opposite to Goodwill square,
          Dhanori Road, Pune, 411015
        </p>
        <p>+91 9604430489 | +91 7057336919</p>
      </footer>
    </div>
  );
};

export default Hire;
