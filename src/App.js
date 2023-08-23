import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a Cloud Vitals</h1>
          <p>
          Cloud Vitals es un proyecto innovador que busca mejorar la eficiencia y productividad de la agricultura y cuidar el uso de agua mediante el uso de tecnologías de la nube, internet de las cosas e inteligencia artificial.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>¿Qué es Cloud Vitals?</h2>
          <p>
          Cloud Vitals es una plataforma que permite a los agricultores y productores acceder a información valiosa sobre sus cultivos y condiciones ambientales en tiempo real gracias al internet de las cosas y los diferentes sensores que se encuentran en las zonas de cultivo. Con nuestra tecnología de vanguardia y análisis de datos, se proporcionará una predicción precisa para poder optimizar la producción agrícola de la zona con la menor cantidad de agua posible.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-content">
          <h2>Nuestro Equipo</h2>
          <p>
          El proyecto esta creado por un Ingeniero en Sistemas Computacionales del Instituto Politécnico Nacional con una amplia experiencia en proyectos nacionales e internacionales, uniendo las tecnologías más innovadoras en los proyectos que desarrolla. Se espera que con el tiempo el proyecto cuente con expertos en agricultura, ingeniería de software, cómputo en la nube y análisis de datos, y así trabajar juntos para llevar la innovación a la industria agrícola y brindar soluciones inteligentes para los desafíos del campo.
          </p>
        </div>
      </section>

      {/* Agrega más secciones informativas según sea necesario */}

      <section className="contact-section">
        <div className="contact-content">
          <h2>Futuro del Proyecto</h2>
          <p>
          El proyecto tiene mucho futuro, se podrían añadir nuevos módulos como la configuración de aspersores para el riego, adaptar el modelo de Machine Learning para brindar recomendaciones sobre fertilizantes, incorporar drones para el riego, implementar reconocimiento de imágenes para el control de plagas, entre otras muchas ideas. En definitiva, este es un proyecto con un amplio margen para evolucionar y abarcar más aspectos.
          </p>
          <h3>
          La tecnología es simplemente el medio. La gente es el fin.
          -Peter Drucker.

          </h3>
        </div>
      </section>
    </div>
  );
}

export default App;
