'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              CreatorTools AI
            </div>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
              Supercharge Your Content Creation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AI-powered tools designed specifically for content creators. Save time, stay authentic, and grow your audience.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg">
              Get Started Free
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* DM Genie */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">DM Genie</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your AI assistant for managing DMs. Auto-replies, smart tagging, and personalized outreach messages that sound just like you.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Try DM Genie
              </button>
            </motion.div>

            {/* Script Writer Pro */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Script Writer Pro</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Create engaging 30-second video scripts for Reels, TikToks, and YouTube Shorts. Just provide a topic and tone.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Try Script Writer Pro
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Creators Are Saying</h2>
            <p className="text-gray-600 dark:text-gray-300">Join thousands of satisfied content creators</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  "These tools have completely transformed how I create content. The time I save is incredible!"
                </p>
                <div className="font-semibold text-gray-900 dark:text-white">Creator {i}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
                CreatorTools AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Empowering creators with AI tools to grow their audience and save time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Support</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} CreatorTools AI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
} 