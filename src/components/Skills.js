import React from 'react';

function Skills(props) {
  const mySkills = (
    <div>
      {props.skills.map((skll) =>
        <div className='item w33' key={skll.name}>
          <h3>{skll.name}</h3>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <h2>SKILLS</h2>
      {mySkills}
    </div>
  )
};

export default Skills;
