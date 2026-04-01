"use client"

import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, Camera, X, Image as ImageIcon } from "lucide-react"

interface PhotoUploaderProps {
  onImageSelect: (file: File, preview: string) => void
  preview: string | null
  onClear: () => void
}

export function PhotoUploader({ onImageSelect, preview, onClear }: PhotoUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onImageSelect(file, reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [onImageSelect])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
      />
      
      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div
            key="uploader"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleClick}
            className={`relative cursor-pointer rounded-3xl border-4 border-dashed p-8 transition-all duration-300 ${
              isDragging
                ? "border-primary bg-primary/10 scale-105"
                : "border-muted-foreground/30 bg-card hover:border-primary/50 hover:bg-muted/50"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              <motion.div
                animate={{ y: isDragging ? -10 : 0 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-sunshine/30"
              >
                {isDragging ? (
                  <Camera className="h-10 w-10 text-primary" />
                ) : (
                  <Upload className="h-10 w-10 text-primary" />
                )}
              </motion.div>
              
              <div className="text-center">
                <p className="font-[family-name:var(--font-baloo)] text-xl font-bold text-foreground">
                  {isDragging ? "Drop it like it's hot!" : "Upload your pet's photo"}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Drag and drop or click to browse
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ImageIcon className="h-4 w-4" />
                <span>JPG, PNG, GIF up to 10MB</span>
              </div>
            </div>

            {/* Decorative paw prints */}
            <div className="absolute -bottom-2 -right-2 h-12 w-12 rotate-12 text-primary/20">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <ellipse cx="50" cy="65" rx="25" ry="20" />
                <circle cx="30" cy="40" r="12" />
                <circle cx="50" cy="30" r="12" />
                <circle cx="70" cy="40" r="12" />
              </svg>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative overflow-hidden rounded-3xl bg-card shadow-xl"
          >
            <img
              src={preview}
              alt="Pet preview"
              className="h-auto w-full object-cover"
              style={{ maxHeight: "400px" }}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                onClear()
              }}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/80 text-background shadow-lg transition-colors hover:bg-destructive"
            >
              <X className="h-5 w-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
