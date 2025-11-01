import React from 'react';
import './Team.css';

interface TeamMember {
  name: string;
  title: string;
  details: string;
  image: string;
  logos: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Suraj Kesri',
    title: 'Director & Co-founder',
    details: 'Product Designer (IISc) & Mechanical Engineer\nM.Des., B.Tech.',
    image: '/SKesri.png',
    logos: ['/Siemens_AG_logo.svg', '/carelon.png'],
  },
  {
    name: 'Sunandan Paul',
    title: 'Director & Co-founder',
    details: 'Product Designer (IISc) & Architect\nM.Des., B.Arch.',
    image: '/SPaul.png',
    logos: ['/ads-logo.png', '/godrej-interio-logo.svg'],
  },
  {
    name: 'Prof. Vishal Singh',
    title: 'Director & Co-founder',
    details: 'Associate Professor, DM, IISc Bengaluru\nPI: Impact Lab',
    image: '/VS.png',
    logos: ['/iisc.png', '/sydney.svg'],
  },
];

const Team: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>
      <p className="team-subtitle">Born at IISc. On a mission for a Greener World.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.title}</p>
            <p className="team-details">{member.details}</p>
            <div className="team-logos">
              {member.logos.map((logo, i) => (
                <img key={i} src={logo} alt="logo" className="team-logo" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
