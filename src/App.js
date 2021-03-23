import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: './assets/foto.jpeg',
      name: 'Carlos Urtubey',
      profession: 'BackEnd Developer',
      bio: 'Programador políglota. Desarrollador de software a medida, entusiasta por encontrar el balance entre un código limpio y una óptima performance... Además de un buen café ☕.',
      address: 'San Miguel, Buenos Aires, Argentina.',
      social: [
        /* {name: 'facebook', url: 'https://facebook.com/oscarbarajastavares'},
        {name: 'twitter', url: 'https://twitter.com/gndx'}, */
        {name: 'github', url: 'https://github.com/urtubeycarlos'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/carlos-urtubey/'}
      ],
      experience: [
        {jobTitle: 'FrontEnd', company: 'CityDrive', startDate: 'Jan 2016', endDate: 'Present', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {jobTitle: 'Backend', company: 'DragonsDev', startDate: 'September 2014', endDate: 'Jan 2016', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      education: [
        {degree: 'Maestria Atomica', institution: 'MIT', startDate: 'Jan 2016', endDate: 'Jan 2017', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {degree: 'Ingenieria Atomica', institution: 'Harvard', startDate: 'Jan 2014', endDate: 'Decenber 2015', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'JQuery', percentage: '75%'},
        {name: 'Node.js', percentage: '50%'},
        {name: 'React', percentage: '50%'},
        {name: 'Bootstrap', percentage: '50%'},
        {name: 'Typescript', percentage: '95%'},
        {name: 'Ruby', percentage: '90%'},
        {name: 'Java', percentage: '75%'},
        {name: 'C#', percentage: '50%'},
        {name: 'Python', percentage: '50%'},
        {name: 'Lua', percentage: '50%'},
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
