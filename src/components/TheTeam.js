import React, { useState, useEffect } from 'react';
import './components.css';
// import styles from './Consultants.module.css';
// import styles from './TheTeam.module.css';

const baseLink = process.env.REACT_APP_API_ADDRESS || 'http://localhost:3001';

function TheTeam() {
  const [consultants, setConsultants] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const getConsultants = async () => {
    const response = await fetch(`${baseLink}/api/v0/users`);
    const consultants = await response.json();
    const teamMembers = consultants.filter((element) => { if (element.accessLevel.includes('developer')) { return element; } });
    console.log('team members', teamMembers);
    console.log(consultants);
    // return setConsultants(teamMembers);
    const teamMembersShuffled = shuffleArray(teamMembers);
    return setConsultants(teamMembersShuffled);
  };
  useEffect(() => {
    getConsultants();
    //shuffla teamet
    // const intervalID = setInterval(() => {
    //   console.log('team innan', [...consultants]);
    //   setConsultants(shuffleArray([...consultants]));
    //   console.log('team efter', [...consultants]);
    // }, 20000);

    // return () => clearInterval(intervalID);
  }, []);



  return (
    <main className='teamContainer'>
      <div className='headingContainer'>
        {/* <h2 className="headingTeam">The <br /><span className="dreamteam" >One Source</span> <br /> Team!</h2> */}
        <h2 className='headingTeam'>We wouldn&apos;t be One Source without our <span className='dreamteam'>awesome dreamteam</span>!</h2>
        <img src="/IMG/—Pngtree—arc arrow vector diagram_5054191_2.png" alt="arrow" className='arrow' />
      </div>
      <section className="teamMemberContainer">
        {consultants.map((person) => (
          <div className="teamMember" key={person.id}>
            <img src={`/IMG/${person.image}`} alt={person.name} className="teamImage" />
            <h3>{person.name}</h3>
            <p className="skills">frontend developer</p>
            <div className="separator"></div>
            <p className="aboutTeamMember">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quidem eius labore incidunt voluptate!</p>
            <div className="socialIconsContainer">
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-github"></i>
            </div>
            {/* <i class="bi bi-facebook"></i> */}
          </div>
        ))}
      </section>
    </main>
  );
}

export default TheTeam;
