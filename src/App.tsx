import BeforeYouStart from './components/BeforeYouStart'
import CommunityCTA from './components/CommunityCTA'
import CompletionSection from './components/CompletionSection'
import ContactCard from './components/ContactCard'
import FAQAccordion from './components/FAQAccordion'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import RegistrationGuide from './components/RegistrationGuide'
import WhatIsBuilderCenter from './components/WhatIsBuilderCenter'

function App() {
  return (
    <div id="top" className="min-h-screen bg-(--color-ink) selection:bg-(--color-amber)">
      <Header />
      <main>
        <Hero />
        <BeforeYouStart />
        <WhatIsBuilderCenter />
        <RegistrationGuide />
        <CompletionSection />
        <FAQAccordion />
        <ContactCard />
        <CommunityCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
