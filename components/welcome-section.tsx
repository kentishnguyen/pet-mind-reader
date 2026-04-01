"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WavingDog } from "@/components/waving-pet"
import { FloatingPaw } from "@/components/cartoon-animals"
import { Sparkles, ArrowDown } from "lucide-react"

interface WelcomeSectionProps {
  onGetStarted: () => void
}

export function WelcomeSection({ onGetStarted }: WelcomeSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Floating paws decoration */}
      <FloatingPaw className="absolute top-20 left-10 w-12 h-12 text-coral opacity-30" delay={0} />
      <FloatingPaw className="absolute top-40 right-16 w-10 h-10 text-mint opacity-30" delay={0.5} />
      <FloatingPaw className="absolute bottom-32 left-20 w-14 h-14 text-sky opacity-30" delay={1} />
      <FloatingPaw className="absolute bottom-40 right-10 w-8 h-8 text-bubblegum opacity-30" delay={1.5} />
      <FloatingPaw className="absolute top-1/3 left-1/4 w-10 h-10 text-sunshine opacity-20" delay={2} />
      <FloatingPaw className="absolute top-1/2 right-1/4 w-12 h-12 text-coral opacity-20" delay={2.5} />
      
      {/* Main content */}
      <div className="flex flex-col items-center text-center max-w-2xl">
        {/* Speech bubble */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mb-4"
        >
          <div className="bg-card rounded-3xl px-6 py-4 shadow-lg border-2 border-sunshine/50 relative">
            <p className="text-lg md:text-xl text-foreground font-medium" style={{ fontFamily: 'var(--font-display)' }}>
              Woof! Ready to read my mind?
            </p>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-card border-r-2 border-b-2 border-sunshine/50 rotate-45" />
          </div>
        </motion.div>
        
        {/* Waving Dog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <WavingDog className="w-64 h-64 md:w-80 md:h-80" />
        </motion.div>
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="text-coral">Paw</span>
          <span className="text-sky">Thoughts</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md leading-relaxed"
        >
          Ever wondered what your furry friend is really thinking? 
          Upload a photo and let our AI reveal their secret thoughts!
        </motion.p>
        
        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            onClick={onGetStarted}
            size="lg"
            className="bg-coral hover:bg-coral/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
            Get Started
            <Sparkles className="ml-2 h-5 w-5 group-hover:animate-spin" />
          </Button>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-muted-foreground flex items-center gap-2 mt-4"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      
      {/* Animated sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-sunshine"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  )
}
