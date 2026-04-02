"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CartoonDog, CartoonCat, CartoonBunny, CartoonBird, CartoonFish, FloatingPaw } from "./cartoon-animals"

type Environment = "sky" | "land" | "water"

interface FloatingPet {
  id: number
  type: "dog" | "cat" | "bunny" | "bird" | "fish" | "paw"
  environment: Environment
  x: number
  y: number
  scale: number
  duration: number
  delay: number
  direction: "left" | "right" | "up" | "down" | "diagonal"
}

const petEnvironments: Record<FloatingPet["type"], Environment> = {
  bird: "sky",
  dog: "land",
  cat: "land",
  bunny: "land",
  fish: "water",
  paw: "land",
}

function generatePets(count: number): FloatingPet[] {
  const skyTypes: FloatingPet["type"][] = ["bird"]
  const landTypes: FloatingPet["type"][] = ["dog", "cat", "bunny", "paw"]
  const waterTypes: FloatingPet["type"][] = ["fish"]
  
  const pets: FloatingPet[] = []
  
  // Sky pets (top 30%)
  for (let i = 0; i < Math.floor(count * 0.25); i++) {
    const type = skyTypes[Math.floor(Math.random() * skyTypes.length)]
    pets.push({
      id: pets.length,
      type,
      environment: "sky",
      x: Math.random() * 100,
      y: Math.random() * 25, // Top 25%
      scale: 0.3 + Math.random() * 0.3,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * 5,
      direction: Math.random() > 0.5 ? "left" : "right",
    })
  }
  
  // Land pets (middle 40%)
  for (let i = 0; i < Math.floor(count * 0.5); i++) {
    const type = landTypes[Math.floor(Math.random() * landTypes.length)]
    pets.push({
      id: pets.length,
      type,
      environment: "land",
      x: Math.random() * 100,
      y: 30 + Math.random() * 35, // 30-65%
      scale: 0.35 + Math.random() * 0.35,
      duration: 18 + Math.random() * 20,
      delay: Math.random() * 5,
      direction: ["left", "right", "diagonal"][Math.floor(Math.random() * 3)] as FloatingPet["direction"],
    })
  }
  
  // Water pets (bottom 30%)
  for (let i = 0; i < Math.floor(count * 0.25); i++) {
    const type = waterTypes[0]
    pets.push({
      id: pets.length,
      type,
      environment: "water",
      x: Math.random() * 100,
      y: 70 + Math.random() * 25, // Bottom 25%
      scale: 0.3 + Math.random() * 0.3,
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 5,
      direction: Math.random() > 0.5 ? "left" : "right",
    })
  }
  
  return pets
}

function getAnimationProps(pet: FloatingPet) {
  const baseX = pet.x
  const baseY = pet.y
  
  switch (pet.direction) {
    case "left":
      return {
        x: [`${baseX + 20}vw`, `${baseX - 20}vw`],
        y: [`${baseY}vh`, `${baseY + (Math.random() * 6 - 3)}vh`],
      }
    case "right":
      return {
        x: [`${baseX - 20}vw`, `${baseX + 20}vw`],
        y: [`${baseY}vh`, `${baseY + (Math.random() * 6 - 3)}vh`],
      }
    case "up":
      return {
        x: [`${baseX}vw`, `${baseX + (Math.random() * 6 - 3)}vw`],
        y: [`${baseY + 15}vh`, `${baseY - 15}vh`],
      }
    case "down":
      return {
        x: [`${baseX}vw`, `${baseX + (Math.random() * 6 - 3)}vw`],
        y: [`${baseY - 15}vh`, `${baseY + 15}vh`],
      }
    case "diagonal":
      return {
        x: [`${baseX - 12}vw`, `${baseX + 12}vw`],
        y: [`${baseY - 8}vh`, `${baseY + 8}vh`],
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
    setPets(generatePets(14))
  }, [])
  
  if (!mounted || pets.length === 0) return null
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Sky zone gradient (top) */}
      <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-sky-100/30 via-sky-50/20 to-transparent" />
      
      {/* Clouds in sky */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute"
          style={{
            top: `${5 + i * 6}%`,
            left: `${i * 25}%`,
          }}
          animate={{
            x: [0, 100, 0],
          }}
          transition={{
            duration: 60 + i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="80" height="40" viewBox="0 0 80 40" className="opacity-20">
            <ellipse cx="25" cy="25" rx="20" ry="12" fill="#87CEEB" />
            <ellipse cx="45" cy="20" rx="25" ry="15" fill="#87CEEB" />
            <ellipse cx="60" cy="25" rx="18" ry="10" fill="#87CEEB" />
          </svg>
        </motion.div>
      ))}
      
      {/* Land zone (middle) - subtle grass/ground feel */}
      <div className="absolute inset-x-0 top-[30%] h-[40%] bg-gradient-to-b from-transparent via-green-50/10 to-transparent" />
      
      {/* Water zone gradient (bottom) */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-blue-100/30 via-cyan-50/20 to-transparent" />
      
      {/* Water ripples/waves */}
      <div className="absolute inset-x-0 bottom-0 h-[25%] overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent"
            style={{ bottom: `${i * 8}%` }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Animated pets */}
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
              opacity: [0, 0.5, 0.6, 0.5, 0],
              rotate: pet.type === "bird" ? [0, 3, -3, 0] : [0, 2, -2, 0],
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
                y: pet.environment === "water" ? [0, -5, 0, 5, 0] : [0, -8, 0, 8, 0],
                rotate: pet.type === "fish" ? [0, 8, -8, 0] : 0,
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <PetComponent 
                type={pet.type} 
                className={`w-14 h-14 md:w-20 md:h-20 ${
                  pet.type === "paw" ? "text-primary/30" : ""
                }`}
              />
            </motion.div>
          </motion.div>
        )
      })}
      
      {/* Extra floating paw prints on land zone */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`paw-${i}`}
          className="absolute"
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${35 + (i % 3) * 12}%`,
          }}
          initial={{ opacity: 0, scale: 0.25 + (i % 3) * 0.1 }}
          animate={{
            opacity: [0, 0.25, 0.35, 0.25, 0],
            y: [0, -30, -60],
            x: [0, (i % 2 === 0 ? 15 : -15), (i % 2 === 0 ? 30 : -30)],
            rotate: [0, (i % 2 === 0 ? 10 : -10), (i % 2 === 0 ? 20 : -20)],
          }}
          transition={{
            duration: 7 + i * 1.5,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <FloatingPaw className="w-6 h-6 md:w-10 md:h-10 text-amber-600/25" />
        </motion.div>
      ))}
      
      {/* Animated bubbles in water zone */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full bg-cyan-300/25 border border-cyan-200/30"
          style={{
            width: 6 + i * 3,
            height: 6 + i * 3,
            left: `${10 + i * 11}%`,
            bottom: "5%",
          }}
          animate={{
            y: [0, -150, -300],
            x: [0, (i % 2 === 0 ? 20 : -20), (i % 2 === 0 ? 35 : -35)],
            opacity: [0, 0.5, 0],
            scale: [0.6, 1, 0.7],
          }}
          transition={{
            duration: 5 + i * 0.8,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
