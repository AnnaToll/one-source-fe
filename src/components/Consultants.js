import React, { useState, useEffect } from 'react'

const baseLink = process.env.REACT_APP_API_ADDRESS || "http://localhost:3001"


const Consultants = () => {
  const [consultants, setConsultants] = useState([])

  const getConsultants = async () => {
    const response = await fetch(`${baseLink}/api/v0/users`);
    const consultants = await response.json();
    console.log(consultants)
    return setConsultants(consultants)

  }
  useEffect(() => {
    getConsultants()
  }, [])

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/users`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setConsultants(data)
  //     })
  // })

  return (
    <main>
      <div>
        <h1>Vårt dreamteam består av dessa grymma konsulter</h1>
      </div>
      {consultants.map((person) => (
        <div>
          <h2>{person.name}</h2>
          <p>{person.phone}</p>
          <p>{person.email}</p>
          <p>Frontendutvecklare</p>
        </div>
      ))}
    </main>
  )
}

export default Consultants