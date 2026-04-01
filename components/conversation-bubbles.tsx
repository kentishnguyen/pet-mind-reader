"use client"

import { motion } from "framer-motion"

interface Message {
  pet: string
  thought: string
}

interface ConversationBubblesProps {
  messages: Message[]
  isLoading?: boolean
}

// Different colors for different pets in the conversation
const bubbleColors = [
  { bg: "bg-primary/10", border: "border-primary/30", accent: "text-primary" },
  { bg: "bg-secondary/10", border: "border-secondary/30", accent: "text-secondary" },
  { bg: "bg-sky/10", border: "border-sky/30", accent: "text-sky" },
  { bg: "bg-accent/10", border: "border-accent/30", accent: "text-accent" },
]

export function ConversationBubbles({ messages, isLoading }: ConversationBubblesProps) {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="rounded-3xl bg-card p-6 shadow-xl">
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
            <span className="ml-2 text-muted-foreground">Reading minds...</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-2"
    >
      {messages.map((message, index) => {
        const colorSet = bubbleColors[index % bubbleColors.length]
        const isEven = index % 2 === 0
        const isLast = index === messages.length - 1

        return (
          <div key={index} className="relative">
            {/* Chat bubble */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -20 : 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: index * 0.15
              }}
              className={`relative ${isEven ? 'mr-8' : 'ml-8'}`}
            >
              <div
                className={`relative rounded-2xl border-2 ${colorSet.bg} ${colorSet.border} p-4 shadow-lg`}
              >
                {/* Pet name badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                  className={`mb-2 inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-bold uppercase tracking-wide ${colorSet.accent}`}
                >
                  <span className="h-2 w-2 rounded-full bg-current" />
                  {message.pet}
                </motion.div>

                {/* Thought text */}
                <p className="font-[family-name:var(--font-baloo)] text-lg font-medium leading-relaxed text-foreground">
                  &ldquo;{message.thought}&rdquo;
                </p>

                {/* Speech bubble pointer */}
                <div
                  className={`absolute top-6 ${isEven ? '-right-3' : '-left-3'} h-4 w-4 rotate-45 border-2 ${colorSet.bg} ${colorSet.border} ${
                    isEven ? 'border-l-0 border-b-0' : 'border-r-0 border-t-0'
                  }`}
                  style={{
                    background: 'inherit',
                    clipPath: isEven 
                      ? 'polygon(0 0, 100% 0, 100% 100%)' 
                      : 'polygon(0 0, 0 100%, 100% 100%)'
                  }}
                />
              </div>
            </motion.div>

            {/* Connecting arrow to next message */}
            {!isLast && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                className="flex justify-center py-1"
              >
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  className="text-muted-foreground/40"
                >
                  {/* Curved arrow path */}
                  <motion.path
                    d={isEven 
                      ? "M10 0 Q10 16 30 16 Q30 28 20 28" 
                      : "M30 0 Q30 16 10 16 Q10 28 20 28"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: index * 0.15 + 0.25, duration: 0.4 }}
                  />
                  {/* Arrow head */}
                  <motion.path
                    d="M16 24 L20 30 L24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  />
                </svg>
              </motion.div>
            )}
          </div>
        )
      })}
    </motion.div>
  )
}
