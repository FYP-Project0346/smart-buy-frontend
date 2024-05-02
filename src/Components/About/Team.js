import React from 'react'
import shoba from '../../img/shoba (2).jpeg'
import abdulrehman from '../../img/hello.png'
import aisha from '../../img/Aisha.jpeg'

const OurTeam = () => {
  const teamMembers = [
    { name: 'Shoba Rohra', designation: 'Frontend Developer', image: shoba },
    {
      name: 'Abdul Rehman',
      designation: 'Backend Developer',
      image: abdulrehman,
    },
    {
      name: 'Ayesha Fatima',
      designation: 'Python Developer',
      image: aisha,
    },
  ]

  return (
    <div className='container-fluid text-center mt-4'>
      <div>
        <p>A Few Words About</p>
        <h1>Our Team</h1>
        <p>
          We are a Computer Science Students in project we working on different
          technologies like Reactjs, Nodejs ,MonoDB, and Python
        </p>
      </div>
      {/* Row for team member cards */}
      <div className='row justify-content-center mt-4'>
        {teamMembers.map((member, index) => (
          <div key={index} className='col-md-3'>
            <div
              className='card'
              style={{ width: '300px', height: '320px', margin: '15px' }}
            >
              {' '}
              {/* Increased card size and added margin */}
              <img
                src={member.image}
                alt={member.name}
                className='rounded-circle mx-auto mt-3' // Center the image
                style={{ width: '200px', height: '200px' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{member.name}</h5>
                <p className='card-text'>{member.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam
