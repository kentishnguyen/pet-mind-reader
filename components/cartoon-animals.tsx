"use client"

import { motion } from "framer-motion"

export function CartoonDog({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      initial={{ rotate: -5 }}
      animate={{ rotate: 5 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
    >
      {/* Body */}
      <ellipse cx="100" cy="130" rx="55" ry="45" fill="#F5A623" />
      {/* Head */}
      <circle cx="100" cy="70" r="50" fill="#F5A623" />
      {/* Snout */}
      <ellipse cx="100" cy="85" rx="25" ry="20" fill="#FFD699" />
      {/* Nose */}
      <ellipse cx="100" cy="78" rx="10" ry="8" fill="#3D2914" />
      {/* Eyes */}
      <circle cx="80" cy="55" r="12" fill="white" />
      <circle cx="120" cy="55" r="12" fill="white" />
      <circle cx="82" cy="55" r="6" fill="#3D2914" />
      <circle cx="122" cy="55" r="6" fill="#3D2914" />
      {/* Eye shine */}
      <circle cx="84" cy="53" r="2" fill="white" />
      <circle cx="124" cy="53" r="2" fill="white" />
      {/* Ears */}
      <ellipse cx="55" cy="35" rx="20" ry="30" fill="#8B5A2B" />
      <ellipse cx="145" cy="35" rx="20" ry="30" fill="#8B5A2B" />
      {/* Mouth */}
      <path d="M 90 95 Q 100 105 110 95" stroke="#3D2914" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="100" cy="102" rx="8" ry="10" fill="#FF6B6B" />
      {/* Tail */}
      <motion.path
        d="M 155 130 Q 185 100 180 80"
        stroke="#F5A623"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        animate={{ d: ["M 155 130 Q 185 100 180 80", "M 155 130 Q 195 110 190 90"] }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.3 }}
      />
      {/* Collar */}
      <rect x="70" y="105" width="60" height="12" rx="6" fill="#FF6B6B" />
      <circle cx="100" cy="117" r="6" fill="#FFD700" />
    </motion.svg>
  )
}

export function CartoonCat({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      {/* Body */}
      <ellipse cx="100" cy="140" rx="50" ry="40" fill="#A0A0A0" />
      {/* Head */}
      <circle cx="100" cy="80" r="45" fill="#A0A0A0" />
      {/* Inner ears */}
      <polygon points="55,50 70,20 85,50" fill="#FFC0CB" />
      <polygon points="115,50 130,20 145,50" fill="#FFC0CB" />
      {/* Outer ears */}
      <polygon points="50,55 65,15 85,55" fill="#A0A0A0" />
      <polygon points="115,55 135,15 150,55" fill="#A0A0A0" />
      {/* Eyes */}
      <ellipse cx="80" cy="75" rx="12" ry="14" fill="#7ED321" />
      <ellipse cx="120" cy="75" rx="12" ry="14" fill="#7ED321" />
      <ellipse cx="80" cy="75" rx="4" ry="10" fill="#1A1A1A" />
      <ellipse cx="120" cy="75" rx="4" ry="10" fill="#1A1A1A" />
      {/* Nose */}
      <polygon points="100,90 93,100 107,100" fill="#FFB6C1" />
      {/* Whiskers */}
      <line x1="45" y1="90" x2="75" y2="95" stroke="#666" strokeWidth="2" />
      <line x1="45" y1="100" x2="75" y2="100" stroke="#666" strokeWidth="2" />
      <line x1="45" y1="110" x2="75" y2="105" stroke="#666" strokeWidth="2" />
      <line x1="155" y1="90" x2="125" y2="95" stroke="#666" strokeWidth="2" />
      <line x1="155" y1="100" x2="125" y2="100" stroke="#666" strokeWidth="2" />
      <line x1="155" y1="110" x2="125" y2="105" stroke="#666" strokeWidth="2" />
      {/* Mouth */}
      <path d="M 93 105 Q 100 115 107 105" stroke="#666" strokeWidth="2" fill="none" />
      {/* Tail */}
      <motion.path
        d="M 150 140 Q 180 120 175 90"
        stroke="#A0A0A0"
        strokeWidth="15"
        fill="none"
        strokeLinecap="round"
        animate={{ d: ["M 150 140 Q 180 120 175 90", "M 150 140 Q 190 130 185 100"] }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
      />
      {/* Paws */}
      <ellipse cx="70" cy="170" rx="15" ry="10" fill="#A0A0A0" />
      <ellipse cx="130" cy="170" rx="15" ry="10" fill="#A0A0A0" />
    </motion.svg>
  )
}

export function CartoonBunny({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      {/* Body */}
      <ellipse cx="100" cy="150" rx="45" ry="35" fill="#FFF5EE" />
      {/* Head */}
      <circle cx="100" cy="95" r="40" fill="#FFF5EE" />
      {/* Ears */}
      <ellipse cx="70" cy="35" rx="15" ry="45" fill="#FFF5EE" />
      <ellipse cx="130" cy="35" rx="15" ry="45" fill="#FFF5EE" />
      {/* Inner ears */}
      <ellipse cx="70" cy="35" rx="8" ry="35" fill="#FFB6C1" />
      <ellipse cx="130" cy="35" rx="8" ry="35" fill="#FFB6C1" />
      {/* Eyes */}
      <circle cx="85" cy="90" r="10" fill="#3D2914" />
      <circle cx="115" cy="90" r="10" fill="#3D2914" />
      <circle cx="87" cy="87" r="3" fill="white" />
      <circle cx="117" cy="87" r="3" fill="white" />
      {/* Nose */}
      <ellipse cx="100" cy="105" rx="6" ry="5" fill="#FFB6C1" />
      {/* Cheeks */}
      <circle cx="70" cy="100" r="8" fill="#FFB6C1" opacity="0.5" />
      <circle cx="130" cy="100" r="8" fill="#FFB6C1" opacity="0.5" />
      {/* Mouth */}
      <path d="M 94 112 Q 100 118 106 112" stroke="#3D2914" strokeWidth="2" fill="none" />
      {/* Teeth */}
      <rect x="96" y="112" width="8" height="8" rx="2" fill="white" />
      {/* Tail */}
      <circle cx="145" cy="160" r="15" fill="white" />
    </motion.svg>
  )
}

export function CartoonBird({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      animate={{ rotate: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration: 0.5 }}
    >
      {/* Body */}
      <ellipse cx="100" cy="120" rx="45" ry="40" fill="#4ECDC4" />
      {/* Head */}
      <circle cx="100" cy="70" r="35" fill="#4ECDC4" />
      {/* Belly */}
      <ellipse cx="100" cy="130" rx="30" ry="30" fill="#FFF9C4" />
      {/* Beak */}
      <polygon points="135,70 160,75 135,85" fill="#FF9800" />
      {/* Eyes */}
      <circle cx="90" cy="60" r="12" fill="white" />
      <circle cx="92" cy="60" r="6" fill="#1A1A1A" />
      <circle cx="94" cy="58" r="2" fill="white" />
      {/* Wing */}
      <motion.ellipse
        cx="70"
        cy="110"
        rx="25"
        ry="35"
        fill="#3DBDB4"
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 0.3 }}
        style={{ transformOrigin: "70px 110px" }}
      />
      {/* Feet */}
      <line x1="85" y1="155" x2="85" y2="175" stroke="#FF9800" strokeWidth="4" />
      <line x1="115" y1="155" x2="115" y2="175" stroke="#FF9800" strokeWidth="4" />
      <line x1="75" y1="175" x2="95" y2="175" stroke="#FF9800" strokeWidth="4" />
      <line x1="105" y1="175" x2="125" y2="175" stroke="#FF9800" strokeWidth="4" />
      {/* Crest */}
      <ellipse cx="100" cy="40" rx="8" ry="15" fill="#FF6B6B" />
      <ellipse cx="90" cy="45" rx="6" ry="12" fill="#FF6B6B" />
      <ellipse cx="110" cy="45" rx="6" ry="12" fill="#FF6B6B" />
    </motion.svg>
  )
}

export function CartoonFish({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      animate={{ x: [-5, 5, -5], rotate: [-3, 3, -3] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      {/* Body */}
      <ellipse cx="100" cy="100" rx="60" ry="40" fill="#FF6B6B" />
      {/* Tail */}
      <polygon points="30,100 10,70 10,130" fill="#FF8E8E" />
      {/* Dorsal fin */}
      <ellipse cx="100" cy="55" rx="25" ry="15" fill="#FF8E8E" />
      {/* Bottom fin */}
      <ellipse cx="100" cy="145" rx="15" ry="10" fill="#FF8E8E" />
      {/* Scales pattern */}
      <circle cx="90" cy="90" r="8" fill="#FF8E8E" opacity="0.5" />
      <circle cx="110" cy="100" r="8" fill="#FF8E8E" opacity="0.5" />
      <circle cx="90" cy="110" r="8" fill="#FF8E8E" opacity="0.5" />
      {/* Eye */}
      <circle cx="140" cy="90" r="15" fill="white" />
      <circle cx="143" cy="90" r="8" fill="#1A1A1A" />
      <circle cx="145" cy="87" r="3" fill="white" />
      {/* Mouth */}
      <ellipse cx="165" cy="105" rx="8" ry="5" fill="#FF4757" />
      {/* Bubbles */}
      <motion.circle
        cx="175"
        cy="70"
        r="5"
        fill="#87CEEB"
        opacity="0.6"
        animate={{ y: [-10, -30], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.circle
        cx="185"
        cy="80"
        r="3"
        fill="#87CEEB"
        opacity="0.6"
        animate={{ y: [-10, -25], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
      />
    </motion.svg>
  )
}

export function FloatingPaw({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ y: 0, opacity: 0.3 }}
      animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
      transition={{ repeat: Infinity, duration: 4, delay, ease: "easeInOut" }}
    >
      {/* Main pad */}
      <ellipse cx="50" cy="65" rx="25" ry="20" fill="currentColor" />
      {/* Toe pads */}
      <circle cx="30" cy="40" r="12" fill="currentColor" />
      <circle cx="50" cy="30" r="12" fill="currentColor" />
      <circle cx="70" cy="40" r="12" fill="currentColor" />
      <circle cx="80" cy="58" r="10" fill="currentColor" />
    </motion.svg>
  )
}
