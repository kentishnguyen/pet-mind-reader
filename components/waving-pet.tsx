"use client"

import { motion } from "framer-motion"

export function WavingDog({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 600 280"
      className={className}
    >
      {/* BIRD (LEFT) - Sky Theme */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {/* Cloud behind bird */}
        <ellipse cx="70" cy="210" rx="35" ry="12" fill="#E8F4FD" opacity="0.6" />
        
        {/* body */}
        <ellipse cx="70" cy="190" rx="28" ry="22" fill="#6EC6FF" />
        
        {/* belly */}
        <ellipse cx="70" cy="195" rx="18" ry="14" fill="#FFF9C4" />
        
        {/* head */}
        <circle cx="70" cy="160" r="22" fill="#6EC6FF" />

        {/* eye */}
        <circle cx="80" cy="155" r="8" fill="white" />
        <circle cx="82" cy="155" r="4" fill="#333" />
        <circle cx="83" cy="153" r="1.5" fill="white" />

        {/* beak */}
        <polygon points="95,160 115,158 95,168" fill="#FFB347" />

        {/* waving wing */}
        <motion.g
          style={{ transformOrigin: "55px 185px" }}
          animate={{ rotate: [-20, 25, -20] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <ellipse cx="45" cy="185" rx="14" ry="22" fill="#4FA8E8" />
        </motion.g>

        {/* other wing (static) */}
        <ellipse cx="85" cy="190" rx="10" ry="16" fill="#4FA8E8" />

        {/* feet */}
        <line x1="60" y1="210" x2="55" y2="230" stroke="#FFB347" strokeWidth="3" strokeLinecap="round" />
        <line x1="80" y1="210" x2="85" y2="230" stroke="#FFB347" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="230" x2="60" y2="230" stroke="#FFB347" strokeWidth="3" strokeLinecap="round" />
        <line x1="80" y1="230" x2="90" y2="230" stroke="#FFB347" strokeWidth="3" strokeLinecap="round" />

        {/* small crest */}
        <ellipse cx="70" cy="140" rx="5" ry="8" fill="#FF6B6B" />
      </motion.g>


      {/* DOG (CENTER) - Land Theme */}
      <g>
        {/* Ground/grass hint */}
        <ellipse cx="300" cy="265" rx="80" ry="8" fill="#90EE90" opacity="0.3" />
        
        {/* Shadow */}
        <motion.ellipse
          cx="300" cy="260" rx="50" ry="12"
          fill="#00000015"
          animate={{ rx: [50, 45, 50], opacity: [0.15, 0.1, 0.15] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* body */}
        <ellipse cx="300" cy="190" rx="55" ry="45" fill="#F5A623" />
        
        {/* back leg */}
        <ellipse cx="330" cy="230" rx="18" ry="25" fill="#D4860F" />
        <ellipse cx="330" cy="250" rx="14" ry="10" fill="#D4860F" />
        
        {/* front leg */}
        <ellipse cx="270" cy="230" rx="16" ry="25" fill="#F5A623" />
        <ellipse cx="270" cy="250" rx="12" ry="10" fill="#FFD699" />

        {/* head */}
        <circle cx="300" cy="110" r="50" fill="#F5A623" />
        
        {/* snout */}
        <ellipse cx="300" cy="125" rx="22" ry="18" fill="#FFD699" />
        
        {/* nose */}
        <ellipse cx="300" cy="118" rx="10" ry="8" fill="#3D2914" />
        
        {/* mouth */}
        <path d="M 288 135 Q 300 145 312 135" stroke="#3D2914" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        
        {/* tongue */}
        <ellipse cx="300" cy="142" rx="6" ry="8" fill="#FF6B6B" />

        {/* eyes */}
        <circle cx="280" cy="95" r="12" fill="white" />
        <circle cx="320" cy="95" r="12" fill="white" />
        <circle cx="282" cy="95" r="6" fill="#3D2914" />
        <circle cx="322" cy="95" r="6" fill="#3D2914" />
        <circle cx="284" cy="93" r="2" fill="white" />
        <circle cx="324" cy="93" r="2" fill="white" />

        {/* ears */}
        <ellipse cx="255" cy="75" rx="18" ry="28" fill="#8B5A2B" />
        <ellipse cx="345" cy="75" rx="18" ry="28" fill="#8B5A2B" />

        {/* waving arm */}
        <motion.g
          style={{ transformOrigin: "340px 170px" }}
          animate={{ rotate: [-15, 30, -15] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <ellipse cx="355" cy="180" rx="16" ry="35" fill="#F5A623" />
          <ellipse cx="360" cy="150" rx="14" ry="12" fill="#FFD699" />
        </motion.g>

        {/* collar */}
        <rect x="275" y="155" width="50" height="10" rx="5" fill="#FF6B6B" />
        <circle cx="300" cy="165" r="5" fill="#FFD700" />

        {/* tail */}
        <motion.path
          d="M 355 190 Q 390 160 385 130"
          stroke="#F5A623"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M 355 190 Q 390 160 385 130",
              "M 355 190 Q 400 170 395 140",
              "M 355 190 Q 390 160 385 130"
            ]
          }}
          transition={{ repeat: Infinity, duration: 0.3 }}
        />
      </g>


      {/* CAT (RIGHT) - Land Theme */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        {/* Ground hint */}
        <ellipse cx="510" cy="255" rx="50" ry="6" fill="#DEB887" opacity="0.3" />
        
        {/* Shadow */}
        <ellipse cx="510" cy="252" rx="40" ry="8" fill="#00000012" />

        {/* tail */}
        <motion.path
          d="M 545 200 Q 590 170 585 130"
          stroke="#B07B4F"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M 545 200 Q 590 170 585 130",
              "M 545 200 Q 600 180 595 145",
              "M 545 200 Q 590 170 585 130"
            ]
          }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />

        {/* body */}
        <ellipse cx="510" cy="205" rx="45" ry="35" fill="#B07B4F" />
        
        {/* chest */}
        <ellipse cx="510" cy="210" rx="25" ry="22" fill="#D8A67C" />

        {/* back leg */}
        <ellipse cx="540" cy="230" rx="14" ry="20" fill="#A06B3F" />
        <ellipse cx="540" cy="245" rx="10" ry="8" fill="#A06B3F" />
        
        {/* front leg */}
        <ellipse cx="480" cy="230" rx="12" ry="20" fill="#B07B4F" />
        <ellipse cx="480" cy="245" rx="10" ry="8" fill="#D8A67C" />

        {/* head */}
        <circle cx="510" cy="155" r="38" fill="#B07B4F" />

        {/* ears */}
        <polygon points="480,135 490,95 510,130" fill="#B07B4F" />
        <polygon points="540,135 530,95 510,130" fill="#B07B4F" />
        {/* inner ears */}
        <polygon points="485,132 492,105 505,130" fill="#FFB6C1" />
        <polygon points="535,132 528,105 515,130" fill="#FFB6C1" />

        {/* eyes */}
        <ellipse cx="495" cy="150" rx="10" ry="12" fill="#7ED321" />
        <ellipse cx="525" cy="150" rx="10" ry="12" fill="#7ED321" />
        <ellipse cx="495" cy="150" rx="3" ry="9" fill="#1A1A1A" />
        <ellipse cx="525" cy="150" rx="3" ry="9" fill="#1A1A1A" />

        {/* nose */}
        <polygon points="510,162 504,170 516,170" fill="#FF8FA3" />

        {/* whiskers */}
        <line x1="465" y1="165" x2="490" y2="168" stroke="#8B6B4F" strokeWidth="1.5" />
        <line x1="465" y1="172" x2="490" y2="172" stroke="#8B6B4F" strokeWidth="1.5" />
        <line x1="530" y1="168" x2="555" y2="165" stroke="#8B6B4F" strokeWidth="1.5" />
        <line x1="530" y1="172" x2="555" y2="172" stroke="#8B6B4F" strokeWidth="1.5" />

        {/* mouth */}
        <path d="M 504 175 Q 510 182 516 175" stroke="#8B6B4F" strokeWidth="1.5" fill="none" />

        {/* waving paw */}
        <motion.g
          style={{ transformOrigin: "550px 185px" }}
          animate={{ rotate: [-25, 30, -25] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <ellipse cx="560" cy="185" rx="12" ry="30" fill="#B07B4F" />
          <ellipse cx="565" cy="158" rx="10" ry="10" fill="#D8A67C" />
          {/* paw pads */}
          <circle cx="563" cy="153" r="2" fill="#FFB6C1" />
          <circle cx="568" cy="156" r="2" fill="#FFB6C1" />
          <circle cx="568" cy="162" r="2" fill="#FFB6C1" />
        </motion.g>
      </motion.g>
    </motion.svg>
  )
}
