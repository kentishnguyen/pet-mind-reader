"use client"

import { motion } from "framer-motion"

interface ThoughtBubbleProps {
  thought: string
  isLoading?: boolean
}

export function ThoughtBubble({ thought, isLoading }: ThoughtBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative"
    >
      {/* Main thought bubble */}
      <div className="relative rounded-3xl bg-card p-6 shadow-xl">
        {/* Decorative quote marks */}
        <div className="absolute -left-2 -top-2 font-[family-name:var(--font-baloo)] text-6xl leading-none text-primary/20">
          &ldquo;
        </div>
        
        {isLoading ? (
          <div className="flex items-center justify-center gap-2 py-4">
            <motion.div
              className="h-4 w-4 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0 }}
            />
            <motion.div
              className="h-4 w-4 rounded-full bg-secondary"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
            />
            <motion.div
              className="h-4 w-4 rounded-full bg-accent"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
            />
            <span className="ml-2 text-muted-foreground">Reading mind...</span>
          </div>
        ) : (
          <p className="relative z-10 font-[family-name:var(--font-baloo)] text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            {thought}
          </p>
        )}
        
        {/* Decorative closing quote */}
        <div className="absolute -bottom-4 -right-2 font-[family-name:var(--font-baloo)] text-6xl leading-none text-primary/20">
          &rdquo;
        </div>
      </div>

      {/* Thought bubble tail (circles) */}
      <div className="absolute -bottom-6 left-8 flex items-end gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="h-6 w-6 rounded-full bg-card shadow-md"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="h-4 w-4 rounded-full bg-card shadow-md"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="h-2 w-2 rounded-full bg-card shadow-md"
        />
      </div>
    </motion.div>
  )
}
