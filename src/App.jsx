import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ErrorBoundary from './components/ui/ErrorBoundary'
import Layout from './components/layout/Layout'
import AnalyticsTracker from './analytics/AnalyticsTracker'
import ScrollToTop from './components/ui/ScrollToTop'
import BackgroundVideo from './components/ui/BackgroundVideo'
import bgPoster from './assets/dropback.webp'
import bgVideoWebm from './assets/soldier.webm'

// Lazy load route components for code splitting
const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const Projects = lazy(() => import('./pages/Projects'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-gold text-2xl font-pixel animate-pulse">Loading...</div>
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AnalyticsTracker />
        <ScrollToTop />
        <BackgroundVideo
          posterSrc={bgPoster}
          webmSrc={bgVideoWebm}
          overlayOpacity={0.6}
        />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App
