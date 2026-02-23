import './chisiamo.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>Chi siamo</h1>

      <section className="about-section">
        <h2>Il team e la scuola</h2>
        <p>
          Questo progetto è stato realizzato dagli studenti dell’indirizzo
          <strong> Informatica</strong>, nell’ambito di un percorso di studio
          orientato allo sviluppo software e alle tecnologie web moderne.
        </p>
        <p>
          Il lavoro è stato svolto in team, applicando metodologie collaborative
          e competenze acquisite durante il corso, come la progettazione
          dell’interfaccia, lo sviluppo frontend e l’organizzazione del codice.
        </p>
      </section>

      <section className="about-section">
        <h2>L’azienda committente</h2>
        <p>
          L’azienda committente è una realtà operante nel settore dell’e-commerce,
          con l’obiettivo di offrire prodotti di qualità attraverso una
          piattaforma semplice, moderna e accessibile.
        </p>
        <p>
          Grazie a un forte orientamento all’innovazione digitale, l’azienda
          punta a migliorare costantemente l’esperienza utente e i servizi offerti
          ai propri clienti.
        </p>
      </section>

      <section className="about-section">
        <h2>Mission e valori</h2>
        <ul>
          <li>Innovazione tecnologica continua</li>
          <li>Attenzione all’esperienza dell’utente</li>
          <li>Affidabilità e trasparenza</li>
          <li>Collaborazione e crescita del team</li>
        </ul>
        <p>
          La nostra missione è creare soluzioni digitali efficaci, intuitive e
          orientate alle reali esigenze degli utenti.
        </p>
      </section>
    </div>
  );
};

export default About;
