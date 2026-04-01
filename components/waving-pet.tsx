"use client"

import { motion } from "framer-motion"

export function WavingDog({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 600 300"
      className={className}
    >

      {/* BIRD (LEFT) */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {/* body */}
        <circle cx="70" cy="190" r="30" fill="#6EC6FF" />

        {/* eye */}
        <circle cx="80" cy="180" r="5" fill="white" />
        <circle cx="82" cy="180" r="3" fill="#333" />

        {/* beak */}
        <polygon points="95,190 115,185 95,200" fill="#FFB347" />

        {/* waving wing */}
        <motion.g
          style={{ transformOrigin: "70px 190px" }}
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <ellipse cx="60" cy="190" rx="18" ry="28" fill="#4FA8E8" />
        </motion.g>

        {/* feet */}
        <line x1="60" y1="220" x2="55" y2="235" stroke="#FFB347" strokeWidth="3" />
        <line x1="80" y1="220" x2="85" y2="235" stroke="#FFB347" strokeWidth="3" />
      </motion.g>


      {/* DOG (CENTER) */}
      <g transform="translate(150,0)">
        {/* Paste your entire dog SVG here unchanged */}

        {/* Shadow */}
        <motion.ellipse
          cx="150" cy="275" rx="60" ry="15"
          fill="#00000020"
          animate={{ rx: [60, 55, 60], opacity: [0.2, 0.15, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* body */}
        <ellipse cx="150" cy="180" rx="70" ry="55" fill="#F5A623" />

        {/* head */}
        <circle cx="150" cy="100" r="60" fill="#F5A623" />

        {/* waving arm */}
        <motion.g
          style={{ transformOrigin: "190px 160px" }}
          animate={{ rotate: [-15, 25, -15] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <ellipse cx="200" cy="180" rx="18" ry="40" fill="#F5A623" />
          <ellipse cx="205" cy="145" rx="16" ry="14" fill="#FFD699" />
        </motion.g>

      </g>


      {/* CAT (RIGHT) */}
      <motion.g
        transform="translate(450,0)"
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {/* body */}
        <ellipse cx="70" cy="200" rx="40" ry="30" fill="#B07B4F" />

        {/* head */}
        <circle cx="70" cy="150" r="35" fill="#B07B4F" />

        {/* ears */}
        <polygon points="45,130 55,100 70,130" fill="#B07B4F" />
        <polygon points="95,130 85,100 70,130" fill="#B07B4F" />

        {/* eyes */}
        <circle cx="58" cy="145" r="6" fill="white" />
        <circle cx="82" cy="145" r="6" fill="white" />
        <circle cx="58" cy="145" r="3" fill="#333" />
        <circle cx="82" cy="145" r="3" fill="#333" />

        {/* nose */}
        <circle cx="70" cy="155" r="4" fill="#FF8FA3" />

        {/* waving paw */}
        <motion.g
          style={{ transformOrigin: "110px 180px" }}
          animate={{ rotate: [-25, 25, -25] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <ellipse cx="110" cy="180" rx="12" ry="35" fill="#B07B4F" />
          <circle cx="110" cy="150" r="10" fill="#D8A67C" />
        </motion.g>

        {/* tail */}
        <motion.path
          d="M100 200 Q150 170 140 130"
          stroke="#B07B4F"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M100 200 Q150 170 140 130",
              "M100 200 Q160 190 150 150",
              "M100 200 Q150 170 140 130"
            ]
          }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
      </motion.g>

    </motion.svg>
  )
}