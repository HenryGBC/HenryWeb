import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(card) {
  const { props } = card;
  return (
    <div className="card">
      <div className="card__header">
        <FontAwesomeIcon icon={['fab', props.icon]} size="2x" />
        <h3>{props.title}</h3>
      </div>
      <div className="card__body">
        <p>{props.description}</p>
        <div className="card__body-cta">
          <a href={props.url} target="_blank">
            {props.cta}
          </a>
        </div>
      </div>

      <style jsx>{`
        .card {
          border: 2px solid #ffaa00;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        .card__header {
          align-items: center;
          background-color: #ffaa00;
          padding: 1rem;
          color: black;
          display: grid;
          grid-template-columns: 50px 1fr;
        }
        .card__header h3 {
          font-size: 2rem;
          margin-left: 1rem;
        }
        .card__body {
          padding: 2rem;
          position: relative;
          min-height: 12rem;
        }
        .card__body p {
          color: white;
          font-family: 'Roboto';
          font-size: 1.3rem;
        }
        .card__body-cta {
          position: absolute;
          right: 10px;
          bottom: 10px;
        }
        .card__body-cta a {
          color: white;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
