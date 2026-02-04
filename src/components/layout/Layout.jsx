import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
