import React from 'react';

function Education(props){
  const myEducation = (
    <div>
      {props.education.map((edu) =>
        <div className='item' key={edu.degree}>
          <h3>{edu.degree} <span>[{edu.startDate} - {edu.endDate}]</span></h3>
          <span><strong>{edu.institution}</strong></span>
          <p>{edu.description}<br/><strong>Total aprobado: {edu.percentaje} | Promedio: {edu.average}/10</strong></p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-graduation-cap'></i>
      <h2>EDUCACIÓN</h2>
      {myEducation}
    </div>
  )
};

export default Education;
