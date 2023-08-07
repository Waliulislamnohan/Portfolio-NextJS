import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faLinkedin);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
