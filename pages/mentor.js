import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Card from '../components/Card.js';
import Link from 'next/link';

export default function Mentor() {
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
              <Link href="/">
                <h1>HenryGBC</h1>
              </Link>
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
        <div className={styles.page}>
          <h2>Próximamente..</h2>

          <p>
            Mi plan es elaborar un proceso de mentoría en
            <strong> programación</strong> orientado a cualquier persona  que
            desee conocer más sobre este mundo, sin importar el nivel de
            conocimiento que tenga. 
          </p>
          <p>
            El <strong>objetivo</strong> es compartir desde mi experiencia y
            conocimiento los niveles básicos y avanzados que todo
            <strong> desarrollador </strong>
            necesita para potenciar sus habilidades y conocimientos. 
          </p>
          <p>
            ¡Acompáñame en esta nueva aventura, <strong>pre-regístrate</strong>!
          </p>

          <a
            className={styles.button}
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_ZyoTFIkWo3zmtj6AwYemAHCTRJFVqvRAV_k1zQ5z5LXPqw/viewform?usp=sf_link"
            target="_blank"
          >
            Pre registro
          </a>
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
