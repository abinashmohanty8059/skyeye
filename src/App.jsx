import Header from './components/Header'
import VideoHero from './components/VideoHero'
import Hero from './components/Hero'
import ImageMorphGallery from './components/ImageMorphGallery'
import WhatWeDo from './components/WhatWeDo'
import VideoStrip from './components/VideoStrip'
import Technology from './components/Technology'
import Solutions from './components/Solutions'
import Product from './components/Product'
import Engineering from './components/Engineering'
import RnD from './components/RnD'
import InTheField from './components/InTheField'
import Recognition from './components/Recognition'
import AIIntelligence from './components/AIIntelligence'
import Learning from './components/Learning'
import Talent from './components/Talent'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <VideoHero />
        <Hero />
        <ImageMorphGallery />
        <WhatWeDo />
        <VideoStrip />
        <Technology />
        <Solutions />
        <Product />
        <Engineering />
        <RnD />
        <InTheField />
        <Recognition />
        <AIIntelligence />
        <Learning />
        <Talent />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
