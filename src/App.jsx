import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import SelectedWork from './components/SelectedWork'
import Process from './components/Process'
import About from './components/About'
import Pricing from './components/Pricing'
import PriceEstimator from './components/PriceEstimator'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <SelectedWork />
        <Process />
        <About />
<Pricing />
        <PriceEstimator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
