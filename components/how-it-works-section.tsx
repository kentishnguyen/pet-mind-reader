"use client"

import { motion } from "framer-motion"
import { Upload, Brain, MessageCircle, Share2 } from "lucide-react"
import { CartoonDog, CartoonCat, CartoonBunny, CartoonBird } from "./cartoon-animals"

const steps = [
  {
    icon: Upload,
    title: "Upload a Photo",
    description: "Snap a pic of your pet or upload one from your gallery. Any pet works!",
    color: "bg-coral/20",
    iconColor: "text-coral",
  },
  {
    icon: Brain,
    title: "AI Reads Their Mind",
    description: "Our advanced AI analyzes your pet's expression and body language.",
    color: "bg-mint/20",
    iconColor: "text-mint",
  },
  {
    icon: MessageCircle,
    title: "Get Their Thoughts",
    description: "Discover the hilarious inner monologue your pet has been hiding!",
    color: "bg-sky/20",
    iconColor: "text-sky",
  },
  {
    icon: Share2,
    title: "Share the Laughs",
    description: "Save and share the funny results with friends and family!",
    color: "bg-bubblegum/20",
    iconColor: "text-bubblegum",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-card py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-[family-name:var(--font-baloo)] text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Reading your pet&apos;s mind is easier than teaching them to sit. Just 4 simple steps!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Step {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`mb-4 flex h-24 w-24 items-center justify-center rounded-3xl ${step.color} transition-all group-hover:shadow-lg`}
                >
                  <step.icon className={`h-10 w-10 ${step.iconColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className="mb-2 font-[family-name:var(--font-baloo)] text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animals parade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-4 overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0 }}
          >
            <CartoonDog className="h-20 w-20 drop-shadow-md" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
          >
            <CartoonCat className="h-20 w-20 drop-shadow-md" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          >
            <CartoonBunny className="h-20 w-20 drop-shadow-md" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}
          >
            <CartoonBird className="h-20 w-20 drop-shadow-md" />
          </motion.div>
        </motion.div>

        {/* Fun stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            <span className="font-[family-name:var(--font-baloo)] text-2xl font-bold text-primary">10,000+</span>
            {" "}pet minds read and counting!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
