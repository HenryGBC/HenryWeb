import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Card from '../components/Card.js';

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
        <div className={styles.page}>
          <h2 className={styles.title}>Próximamente..</h2>

          <p className={styles.description}>
            Estoy armando un plan de mentoría, para distintos niveles. <br></br>
            Desde alguien que no tiene ni idea del mundo de la programación,
            pasando por niveles básicos y avanzados.
          </p>

          <a
            className={styles.button}
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_ZyoTFIkWo3zmtj6AwYemAHCTRJFVqvRAV_k1zQ5z5LXPqw/viewform?usp=sf_link"
            target="_blank"
          >
            Pre registráte
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
