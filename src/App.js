import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a Cloud Vitals</h1>
          <p>
            Cloud Vitals es un proyecto innovador que busca mejorar la eficiencia y productividad
            de la agricultura mediante el uso de tecnologías de la nube y análisis de datos.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>¿Qué es Cloud Vitals?</h2>
          <p>
            Cloud Vitals es una plataforma que permite a los agricultores y productores acceder a
            información valiosa sobre sus cultivos y condiciones ambientales. Con nuestra
            tecnología de vanguardia y análisis de datos, proporcionamos recomendaciones
            personalizadas para mejorar la productividad y optimizar el uso de recursos.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-content">
          <h2>Nuestro Equipo</h2>
          <p>
            Nuestro equipo está formado por expertos en agricultura, ingeniería de software y
            análisis de datos. Trabajamos juntos para llevar la innovación a la industria agrícola
            y brindar soluciones inteligentes para los desafíos del campo.
          </p>
        </div>
      </section>

      {/* Agrega más secciones informativas según sea necesario */}

      <section className="contact-section">
        <div className="contact-content">
          <h2>Contacto</h2>
          <p>
            Si tienes alguna pregunta o deseas obtener más información sobre Cloud Vitals,
            no dudes en ponerte en contacto con nuestro equipo.
          </p>
          <a href="mailto:contacto@cloudvitals.com">contacto@cloudvitals.com</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
