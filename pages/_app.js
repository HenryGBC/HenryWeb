import '../styles/globals.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faEnvelope);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
