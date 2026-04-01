"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CartoonDog, CartoonCat, CartoonBunny, CartoonBird, CartoonFish, FloatingPaw } from "./cartoon-animals"

interface FloatingPet {
  id: number
  type: "dog" | "cat" | "bunny" | "bird" | "fish" | "paw"
  x: number
  y: number
  scale: number
  duration: number
  delay: number
  direction: "left" | "right" | "up" | "down" | "diagonal"
}

function generatePets(count: number): FloatingPet[] {
  const types: FloatingPet["type"][] = ["dog", "cat", "bunny", "bird", "fish", "paw"]
  const directions: FloatingPet["direction"][] = ["left", "right", "up", "down", "diagonal"]
  
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: types[Math.floor(Math.random() * types.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.3 + Math.random() * 0.4,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
    direction: directions[Math.floor(Math.random() * directions.length)],
  }))
}

function getAnimationProps(pet: FloatingPet) {
  const baseX = pet.x
  const baseY = pet.y
  
  switch (pet.direction) {
    case "left":
      return {
        x: [`${baseX + 20}vw`, `${baseX - 20}vw`],
        y: [`${baseY}vh`, `${baseY + (Math.random() * 10 - 5)}vh`],
      }
    case "right":
      return {
        x: [`${baseX - 20}vw`, `${baseX + 20}vw`],
        y: [`${baseY}vh`, `${baseY + (Math.random() * 10 - 5)}vh`],
      }
    case "up":
      return {
        x: [`${baseX}vw`, `${baseX + (Math.random() * 10 - 5)}vw`],
        y: [`${baseY + 20}vh`, `${baseY - 20}vh`],
      }
    case "down":
      return {
        x: [`${baseX}vw`, `${baseX + (Math.random() * 10 - 5)}vw`],
        y: [`${baseY - 20}vh`, `${baseY + 20}vh`],
      }
    case "diagonal":
      return {
        x: [`${baseX - 15}vw`, `${baseX + 15}vw`],
        y: [`${baseY - 15}vh`, `${baseY + 15}vh`],
      }
    default:
      return {
        x: [`${baseX}vw`, `${baseX}vw`],
        y: [`${baseY}vh`, `${baseY}vh`],
      }
  }
}

function PetComponent({ type, className }: { type: FloatingPet["type"]; className?: string }) {
  switch (type) {
    case "dog":
      return <CartoonDog className={className} />
    case "cat":
      return <CartoonCat className={className} />
    case "bunny":
      return <CartoonBunny className={className} />
    case "bird":
      return <CartoonBird className={className} />
    case "fish":
      return <CartoonFish className={className} />
    case "paw":
      return <FloatingPaw className={className} />
    default:
      return null
  }
}

export function AnimatedPetBackground() {
  const [pets, setPets] = useState<FloatingPet[]>([])
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    setPets(generatePets(12))
  }, [])
  
  if (!mounted || pets.length === 0) return null
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
      
      {pets.map((pet) => {
        const animProps = getAnimationProps(pet)
        
        return (
          <motion.div
            key={pet.id}
            className="absolute"
            style={{
              left: 0,
              top: 0,
            }}
            initial={{
              x: animProps.x[0],
              y: animProps.y[0],
              opacity: 0,
              scale: pet.scale,
            }}
            animate={{
              x: animProps.x,
              y: animProps.y,
              opacity: [0, 0.4, 0.5, 0.4, 0],
              rotate: pet.type === "bird" ? [0, 5, -5, 0] : [0, 3, -3, 0],
            }}
            transition={{
              duration: pet.duration,
              delay: pet.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0, 10, 0],
                rotate: pet.type === "fish" ? [0, 10, -10, 0] : 0,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <PetComponent 
                type={pet.type} 
                className={`w-16 h-16 md:w-24 md:h-24 ${
                  pet.type === "paw" ? "text-primary/30" : ""
                }`}
              />
            </motion.div>
          </motion.div>
        )
      })}
      
      {/* Extra floating paw prints */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`paw-${i}`}
          className="absolute"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          initial={{ opacity: 0, scale: 0.3 + (i % 3) * 0.15 }}
          animate={{
            opacity: [0, 0.3, 0.4, 0.3, 0],
            y: [0, -50, -100],
            x: [0, (i % 2 === 0 ? 20 : -20), (i % 2 === 0 ? 40 : -40)],
            rotate: [0, (i % 2 === 0 ? 15 : -15), (i % 2 === 0 ? 30 : -30)],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <FloatingPaw className="w-8 h-8 md:w-12 md:h-12 text-coral/20" />
        </motion.div>
      ))}
      
      {/* Animated bubbles for fish */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full bg-sky/20"
          style={{
            width: 8 + i * 4,
            height: 8 + i * 4,
            left: `${15 + i * 15}%`,
            bottom: "10%",
          }}
          animate={{
            y: [0, -200, -400],
            x: [0, (i % 2 === 0 ? 30 : -30), (i % 2 === 0 ? 50 : -50)],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.8],
          }}
          transition={{
            duration: 6 + i,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
