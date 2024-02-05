import logoFronted from './assets/fronted.webp';
import './App.css';

function App() {
  return (
    <div>
      <a href="https://github.com/tuberquia2115" target="_blank">
        <img src={logoFronted} className="logo react" alt="Logo Frontend-developer" />
      </a>

      <h1>Quien soy? </h1>
      <p>
        ¡Hola! Soy un Tecnólogo en Análisis y Desarrollo de Información apasionado por el Front-end
        Development, con más de 5 años de experiencia. Mi enfoque se centra en el desarrollo de soluciones web
        y móviles, especializado en React.js y React-Native.
      </p>
      <p>
        A lo largo de mi carrera, he liderado proyectos desafiantes, aplicando creatividad para crear
        interfaces interactivas. Mi dedicación a la excelencia y búsqueda constante de conocimientos ha sido
        clave en mi desarrollo profesional. Disfruto del trabajo colaborativo y comparto conocimientos,
        creyendo en el aprendizaje conjunto para lograr resultados excepcionales.
      </p>
      <p>
        Emocionado por seguir creciendo, busco contribuir a proyectos innovadores y estoy abierto a nuevas
        oportunidades y conexiones profesionales. ¡Contáctame para explorar colaboraciones o compartir
        experiencias en el apasionante mundo del desarrollo Front-end! 🚀
      </p>
    </div>
  );
}

export default App;
