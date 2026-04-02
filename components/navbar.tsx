"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Examples", href: "#examples" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScratched, setIsScratched] = useState(false)
  const [showPaw, setShowPaw] = useState(false)

  const handleTryFreeClick = () => {
    if (isScratched) return
    
    setShowPaw(true)
    
    // After paw swipe animation, hide button and show scratch
    setTimeout(() => {
      setIsScratched(true)
      setShowPaw(false)
    }, 500)
  }

  const handleScratchClick = () => {
    // Reset the button after clicking on scratch marks
    setIsScratched(false)
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary"
            >
              <Brain className="h-6 w-6 text-primary-foreground" />
            </motion.div>
            <span className="font-[family-name:var(--font-baloo)] text-2xl font-bold">
              <span className="text-primary">NeuroPaws</span>
              <span className="text-secondary">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Try Free Button with Scratch Effect */}
            <div className="relative h-10 w-28">
              <AnimatePresence mode="wait">
                {!isScratched ? (
                  <motion.button
                    key="button"
                    onClick={handleTryFreeClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8,
                      rotate: -15,
                      x: 40,
                      y: 30,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-xl bg-primary px-6 py-2 font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg"
                  >
                    Try Free
                  </motion.button>
                ) : (
                  <motion.div
                    key="scratch"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handleScratchClick}
                    title="Click to restore button"
                  >
                    <Image
                      src="/images/claw-marks.png"
                      alt="Claw scratch marks"
                      width={60}
                      height={60}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Animated Real Cat Paw - Coming from below */}
              <AnimatePresence>
                {showPaw && (
                  <motion.div
                    className="absolute -bottom-28 -right-2 z-10 pointer-events-none"
                    initial={{ 
                      y: 60, 
                      x: 10,
                      rotate: 15,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: -20, 
                      x: -5,
                      rotate: -10,
                      opacity: 1 
                    }}
                    exit={{ 
                      y: 40, 
                      x: 15,
                      rotate: 20,
                      opacity: 0 
                    }}
                    transition={{ 
                      duration: 0.35,
                      ease: "easeOut"
                    }}
                  >
                    <Image
                      src="/images/cat-paw.png"
                      alt="Cat paw swiping"
                      width={120}
                      height={140}
                      className="object-contain drop-shadow-lg"
                      style={{ width: "auto", height: "auto" }}
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-4 pb-6 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-2 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Try Free with Scratch Effect */}
                <div className="relative h-12 mx-4">
                  <AnimatePresence mode="wait">
                    {!isScratched ? (
                      <motion.button
                        key="mobile-button"
                        onClick={handleTryFreeClick}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 1 }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.8,
                          x: 30,
                          y: 20,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground"
                      >
                        Try Free
                      </motion.button>
                    ) : (
                      <motion.div
                        key="mobile-scratch"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={handleScratchClick}
                      >
                        <Image
                          src="/images/claw-marks.png"
                          alt="Claw scratch marks"
                          width={60}
                          height={60}
                          className="object-contain"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Mobile Real Cat Paw - Coming from below */}
                  <AnimatePresence>
                    {showPaw && (
                      <motion.div
                        className="absolute -bottom-24 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
                        initial={{ y: 50, opacity: 0, rotate: 10 }}
                        animate={{ y: -20, opacity: 1, rotate: -5 }}
                        exit={{ y: 30, opacity: 0, rotate: 15 }}
                        transition={{ duration: 0.35 }}
                      >
                        <Image
                          src="/images/cat-paw.png"
                          alt="Cat paw swiping"
                          width={100}
                          height={120}
                          className="object-contain drop-shadow-lg"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
