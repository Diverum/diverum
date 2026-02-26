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
import AgendarReunionPage from './pages/AgendarReunionPage'
import MetodologiaPage from './pages/MetodologiaPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const { pathname, search } = window.location

  let resolvedPath = pathname

  // Supports SPA fallback URLs like `?/<route>` and `?%2F<route>` used by static hosts.
  if (pathname === '/' && /^\?(\/|%2F)/i.test(search)) {
    try {
      const decodedSearch = decodeURIComponent(search.slice(1))
      const routeFromSearch = decodedSearch.split('&')[0].replace(/~and~/g, '&')
      resolvedPath = routeFromSearch.startsWith('/') ? routeFromSearch : `/${routeFromSearch}`
    } catch {
      resolvedPath = pathname
    }
  }

  const cleanPath = resolvedPath.replace(/\/+$/, '') || '/'

  if (cleanPath === '/agendar') {
    return <AgendarPage />
  }

  if (cleanPath === '/agendar-reunion') {
    return <AgendarReunionPage />
  }

  if (cleanPath === '/metodologia') {
    return <MetodologiaPage />
  }

  if (cleanPath === '/') {
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

  return <NotFoundPage />
}

export default App
