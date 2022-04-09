import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../lib/hex_styles.css'
import {TwitterProvider} from '../context/TwitterContext'


function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <Component {...pageProps} />
    </TwitterProvider>
  )
}

export default MyApp
