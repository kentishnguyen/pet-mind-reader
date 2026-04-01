"use client"

import { useState, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { MindReaderSection } from "@/components/mind-reader-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { Footer } from "@/components/footer"
import { AnimatedPetBackground } from "@/components/animated-pet-background"
import { WelcomeSection } from "@/components/welcome-section"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const mainContentRef = useRef<HTMLDivElement>(null)
  
  const handleGetStarted = () => {
    setShowWelcome(false)
    // Smooth scroll to main content after a short delay
    setTimeout(() => {
      mainContentRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }
  
  return (
    <main className="min-h-screen relative">
      <AnimatedPetBackground />
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <div className="pt-16">
          {showWelcome && (
            <WelcomeSection onGetStarted={handleGetStarted} />
          )}
          <div ref={mainContentRef}>
            <MindReaderSection />
          </div>
        </div>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <Footer />
      </div>
    </main>
  )
}