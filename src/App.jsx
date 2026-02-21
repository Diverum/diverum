import './App.css'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import Process from './components/Process'
import SocialProof from './components/SocialProof'
import ForWhom from './components/ForWhom'
import Blog from './components/Blog'
import FooterPro from './components/FooterPro'
import AgendarPage from './pages/AgendarPage'

function App() {
  const cleanPath = window.location.pathname.replace(/\/+$/, '') || '/'

  if (cleanPath === '/agendar') {
    return <AgendarPage />
  }

  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <SocialProof />
      <ForWhom />
      <Blog />
      <FooterPro />
    </>
  )
}

export default App
