import React from 'react';

function Experience(props) {
  const myExperience = (
    <div>
      {props.experience.map( (exp) =>
        <div className='item' key={exp.jobTitle}>
          <h3>{exp.jobTitle} <span>[{exp.startDate} - {exp.endDate}]</span></h3>
          <span><strong>{exp.company}</strong></span>
          <ul className='experiencie-item'>
          {exp.tasks.map( (task) =>
              <li key={task}>{task}</li>
          )}
          </ul>
          <p><strong>Contacto: <a href={'mailto:' + exp.contact}>{exp.contact}</a></strong></p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>EXPERIENCIA</h2>
      {myExperience}
    </div>
  )
};

export default Experience;
