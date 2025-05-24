'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <header className="relative min-h-[70vh] flex flex-col justify-center pt-20 pb-8">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          {/* Headline and Subheading */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#391212] leading-tight mb-2"
            >
              Sweet Moments,<br />
              <span className="text-[#74342b]">Delicious Memories</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-[#391212]/80 mb-0"
            >
              Your special occasion, made better!
            </motion.p>
          </div>
          {/* Order Now Button */}
          <div className="flex-1 flex md:justify-end items-end mt-4 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link href="#menu" className="flex items-center gap-2 bg-[#d18f8f] hover:bg-[#74342b] text-beige px-6 py-3 rounded-full text-sm font-medium transition-colors shadow">
                Order Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 rounded-lg overflow-hidden shadow-lg border border-beige bg-beige"
        >
          <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px]">
            <Image
              src="/hero cake.jpg"
              alt="Beautiful cake display"
              fill
              className="object-cover object-12%"
              priority
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
} 