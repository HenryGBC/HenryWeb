import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Card from '../components/Card.js';

export default function Home() {
  const cards = [
    {
      title: 'Acerca de mi',
      description: `Ingeniero Informatico.
                    Apasionado por el mundo del 
                    desarrollo  del software.
                    Apasionado por aprender y enseñar.`,
      url: 'https://www.linkedin.com/in/henry-gabriel-bravo-casanova-b9315583/',
      cta: 'Ver Linkedin',
      icon: 'linkedin',
    },
    {
      title: 'Mi Twitch',
      description: `Me apasiona enseñar, y aprender enseñando, varias veces a la semana
                    estoy en Twitch, enseñando y aprendiendo. También tengo charlas, entrevistas, en fin mucho desarrollo de software`,
      url: 'https://www.twitch.tv/henrygbc',
      cta: 'Ver Canal',
      icon: 'twitch',
    },
    {
      title: 'Fullstapps',
      description: `Fullstapps es una comunidad de desarrolladores, donde cada semana
                    subimos un nuevo video sobre el mundo de la programación.`,
      url: 'https://www.youtube.com/channel/UCQZ9xuu8aA7HdsvJXrAPrlg',
      cta: 'Ver Canal',
      icon: 'youtube',
    },
    {
      title: 'Mentorías',
      description: `Estoy armando un plan de mentoría, para distintos niveles. 
            Desde alguien que no tiene ni idea del mundo de la programación,
            pasando por niveles básicos y avanzados.`,
      url: 'https://henrygbc.dev/mentor',
      cta: 'Ir a pagina',
      icon: 'discord',
    },
  ];

  return (
    <main>
      <Head>
        <title>HenryGBC - Software Developer</title>
        <meta name="description" content="HenryGBC - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-118797996-1`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
             
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-118797996-1');
          `,
          }}
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profileTop}>
            <div>
              <h1>HenryGBC</h1>
            </div>
          </div>
          <div className={styles.profileBottom}>
            <div>
              <h3>Hola mi nombre es</h3>
              <h2>Henry Bravo</h2>
            </div>
            <div>
              <img src="/img/me.png" alt="Foto Henry Bravo" />
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          {cards.map((card, index) => {
            return <Card key={index} props={card} />;
          })}
        </div>
      </div>
      <div className={styles.coffee}>
        <a href="https://www.buymeacoffee.com/henrygbc" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
          />
        </a>
      </div>
      <video autoPlay muted loop className={styles.video}>
        <source src="/video/video-bg.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
