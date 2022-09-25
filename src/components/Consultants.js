import React, { useState, useEffect } from 'react';
// import './components.css';
import styles from './Consultants.module.css';

const baseLink = process.env.REACT_APP_API_ADDRESS || 'http://localhost:3001';

function Consultants() {
  const [consultants, setConsultants] = useState([]);

  const getConsultants = async () => {
    const response = await fetch(`${baseLink}/api/v0/users`);
    const consultants = await response.json();
    console.log(consultants);
    return setConsultants(consultants);
  };
  useEffect(() => {
    getConsultants();
  }, []);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>We wouldn&apos;t be One Source without our <span className={styles.dreamteam}>awesome dreamteam</span>!</h2>
      </div>
      <section className={styles.teamMemberContainer}>
      {consultants.map((person) => (
        <div className={styles.teamMember} key={person.id}>
          <img src={`/IMG/${person.image}`} alt={person.name} className={styles.image} />
          <h3>{person.name}</h3>
          <div><span className={styles.icons}><i className="bi bi-phone-fill"></i></span><span>{person.phone}</span></div>
          <div><span className={styles.icons}><i className="bi bi-envelope-fill"></i></span><span>{person.email}</span></div>
          <p className={styles.skills}>frontend developer</p>
        </div>
      ))}
      </section>
    </main>
  );
}

export default Consultants;
