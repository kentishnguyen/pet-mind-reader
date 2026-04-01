"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Instagram, Twitter, Github } from "lucide-react"
import Link from "next/link"
import { FloatingPaw } from "./cartoon-animals"

const footerLinks = {
  product: [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Examples", href: "#examples" },
    { name: "FAQ", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-card pt-16">
      {/* Floating paws */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingPaw className="absolute left-[10%] top-[20%] h-12 w-12 text-primary/10" delay={0} />
        <FloatingPaw className="absolute right-[15%] top-[30%] h-10 w-10 text-secondary/10" delay={0.5} />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-3xl bg-primary/10 p-8 text-center md:p-12"
        >
          <h2 className="mb-4 font-[family-name:var(--font-baloo)] text-3xl font-bold text-foreground md:text-4xl">
            Ready to read your pet&apos;s mind?
          </h2>
          <p className="mx-auto mb-6 max-w-md text-muted-foreground">
            Upload a photo and discover the hilarious thoughts your furry friend has been hiding!
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-2xl bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg"
          >
            Try It Now - It&apos;s Free!
          </motion.a>
        </motion.div>

        {/* Footer content */}
        <div className="grid gap-8 pb-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-[family-name:var(--font-baloo)] text-2xl font-bold">
                <span className="text-primary">Pet</span>
                <span className="text-secondary">Mind</span>
              </span>
            </Link>
            <p className="mb-4 max-w-sm text-muted-foreground">
              The AI-powered pet mind reader that reveals what your furry friends 
              are REALLY thinking. Prepare for laughs!
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-[family-name:var(--font-baloo)] text-lg font-bold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-baloo)] text-lg font-bold text-foreground">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              2026 Pet Mind Reader. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 text-primary" /> for pets everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
