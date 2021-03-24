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
      profession: 'Full-Stack Developer',
      bio: 'Programador políglota, aspirante a Project Manager. Entusiasta por encontrar el balance entre un código limpio y una óptima performance... Además de un buen café ☕.',
      address: 'San Miguel, Buenos Aires, Argentina.',
      social: [
        {name: 'github', url: 'https://github.com/urtubeycarlos'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/carlos-urtubey/'}
      ],
      experience: [
        {jobTitle: 'Desarrollador/Ayudante de profesor', company: 'Universidad Nacional de General Sarmiento', contact:"smontiel@ungs.edu.ar", startDate: 'Octubre 2015', endDate: 'Noviembre 2017', jobDescription: 'Desarrollador web en HTML5, CSS, Javascript, React y Node.js. Planificación de clases y actividades.'},
        {jobTitle: 'Consultor CX', company: 'Oracle Argentina/Tecnosoftware', contact:"moviedo@tecnosoftware.com", startDate: 'Enero 2019', endDate: 'Abril 2019', jobDescription: 'Desarrollo de extensiones en .NET C#. Consultor técnico .NET. Desarrollo de procesos en PHP. Desarrollo web con Javascript, HTML5, CSS, JQuery.'}
      ],
      education: [
        {degree: 'Tecnicatura Universitaria en Informática', institution: 'Universidad Nacional de General Sarmiento', startDate: '2015', endDate: 'En curso', description: 'Quienes se egresen de dicha carrera podrán desarrollar programas o componentes de programas informáticos, bajo la supervisión del líder del proyecto.'},
        {degree: 'Licenciatura en Sistemas', institution: 'Universidad Nacional de General Sarmiento', startDate: '2015', endDate: 'En curso', description: 'Quienes se egresen de dicha carrera podran desarrollar sistemas de software o componentes de estos sistemas, participar en todas las etapas del ciclo de vida del desarrollo del programa, y ocupar roles de gestión en empresas y proyectos de software.'},
      ],
      skills: [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'JavaScript'},
        {name: 'JQuery'},
        {name: 'Node.js'},
        {name: 'React'},
        {name: 'Bootstrap'},
        {name: 'Typescript'},
        {name: 'Ruby'},
        {name: 'Java'},
        {name: 'C#'},
        {name: 'Python'},
        {name: 'Lua'},
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
