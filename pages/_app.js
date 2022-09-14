import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Navbar from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
    >
      <div className="bg-meta-gray min-h-screen max-h-screen">
        <Navbar />
        <Component {...pageProps} />

      </div>

      <Script src="https://kit.fontawesome.com/4e0b8e54bb.js" crossOrigin="anonymous" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/jquery.ScrollMagic.js" integrity="sha512-bvm+qYsmO30ffnPinuQh59T6PhZMktZeJPwImygJSEwVajnt5ZJfZqGpRYlhZxZuf9QpsQOJ2J6KEw/N9EKlpQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js" integrity="sha512-judXDFLnOTJsUwd55lhbrX3uSoSQSOZR6vNrsll+4ViUFv+XOIr/xaIK96soMj6s5jVszd7I97a0H+WhgFwTEg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js" integrity="sha512-mq6TSOBEH8eoYFBvyDQOQf63xgTeAk7ps+MHGLWZ6Byz0BqQzrP+3GIgYL+KvLaWgpL8XgDVbIRYQeLa3Vqu6A==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" integrity="sha512-DkPsH9LzNzZaZjCszwKrooKwgjArJDiEjA5tTgr3YX4E6TYv93ICS8T41yFHJnnSmGpnf0Mvb5NhScYbwvhn2w==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
    </ThemeProvider>
  );
}
export default MyApp;
