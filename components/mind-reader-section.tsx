"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, RefreshCw, Brain } from "lucide-react"
import { PhotoUploader } from "./photo-uploader"
import { ThoughtBubble } from "./thought-bubble"
import { CartoonDog, CartoonCat, FloatingPaw } from "./cartoon-animals"

export function MindReaderSection() {
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [thought, setThought] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleImageSelect = useCallback((file: File, previewUrl: string) => {
    setImage(file)
    setPreview(previewUrl)
    setThought(null)
    setError(null)
  }, [])

  const handleClear = useCallback(() => {
    setImage(null)
    setPreview(null)
    setThought(null)
    setError(null)
  }, [])

  const readMind = async () => {
    if (!image) return

    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('image', image)

      const response = await fetch('/api/mind-read', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to read mind')
      }

      const data = await response.json()
      setThought(data.thought)
    } catch (err) {
      setError('Oops! Could not read this pet\'s mind. Try again!')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const tryAgain = () => {
    setThought(null)
    readMind()
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-background px-4 py-20">
      {/* Floating paw prints background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingPaw className="absolute left-[5%] top-[15%] h-16 w-16 text-coral/15" delay={0} />
        <FloatingPaw className="absolute right-[10%] top-[25%] h-12 w-12 text-mint/15" delay={0.5} />
        <FloatingPaw className="absolute left-[15%] bottom-[25%] h-20 w-20 text-sky/15" delay={1} />
        <FloatingPaw className="absolute right-[20%] bottom-[15%] h-14 w-14 text-sunshine/15" delay={1.5} />
      </div>

      <div className="container relative mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-bubblegum/20 px-4 py-2 text-sm font-semibold text-foreground"
          >
            <Brain className="h-4 w-4 text-primary" />
            <span>AI-Powered Pet Telepathy</span>
          </motion.div>
          
          <h1 className="mb-4 font-[family-name:var(--font-baloo)] text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-primary">Pet</span>{" "}
            <span className="text-secondary">Mind</span>{" "}
            <span className="text-sky">Reader</span>
          </h1>
          
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Ever wondered what your furry friend is REALLY thinking? 
            Upload a photo and let our AI reveal their deepest, most hilarious thoughts!
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Upload area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <PhotoUploader
              onImageSelect={handleImageSelect}
              preview={preview}
              onClear={handleClear}
            />

            {/* Action buttons */}
            <AnimatePresence>
              {preview && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={readMind}
                    disabled={isLoading}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-bold text-primary-foreground shadow-lg transition-all hover:shadow-xl disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="h-5 w-5 animate-spin" />
                        Reading Mind...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5" />
                        Read Their Mind!
                      </>
                    )}
                  </motion.button>

                  {thought && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={tryAgain}
                      disabled={isLoading}
                      className="flex items-center justify-center gap-2 rounded-2xl border-2 border-secondary bg-transparent px-6 py-4 font-bold text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground disabled:opacity-70"
                    >
                      <RefreshCw className="h-5 w-5" />
                      Try Again
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <ThoughtBubble thought="" isLoading />
                  
                  {/* Thinking animal */}
                  <motion.div
                    className="mt-8 flex justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <CartoonCat className="h-32 w-32 drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              ) : thought ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <ThoughtBubble thought={thought} />
                  
                  {/* Happy animal */}
                  <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.3 }}
                  >
                    <CartoonDog className="h-28 w-28 drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              ) : error ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl bg-destructive/10 p-6 text-center"
                >
                  <p className="font-semibold text-destructive">{error}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="mb-6 flex justify-center gap-4">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                    >
                      <CartoonDog className="h-24 w-24 drop-shadow-lg" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    >
                      <CartoonCat className="h-24 w-24 drop-shadow-lg" />
                    </motion.div>
                  </div>
                  
                  <p className="font-[family-name:var(--font-baloo)] text-xl font-semibold text-muted-foreground">
                    Upload a photo to discover what your pet is thinking!
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground/70">
                    Works with dogs, cats, birds, hamsters, and more...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Fun facts section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-3xl bg-card p-8 shadow-lg"
        >
          <h3 className="mb-6 text-center font-[family-name:var(--font-baloo)] text-2xl font-bold text-foreground">
            Recent Mind Readings
          </h3>
          
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { pet: "Golden Retriever", thought: "If I stare long enough, the pizza WILL fall off the table..." },
              { pet: "Tabby Cat", thought: "I knocked that glass off on purpose. And I'd do it again." },
              { pet: "Corgi", thought: "My legs are short but my dreams are tall. Give me the treat." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="rounded-2xl bg-muted/50 p-4"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.pet}
                </p>
                <p className="text-sm italic text-muted-foreground">
                  &ldquo;{item.thought}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
