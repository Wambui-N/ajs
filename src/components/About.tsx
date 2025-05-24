"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative min-w-[280px] flex-1 rounded-2xl p-8 shadow-lg bg-white backdrop-blur-sm transition-all hover:shadow-xl"
    >
      <div className="absolute -top-4 left-8 rounded-full bg-lightPink/40 p-3 shadow-md">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="mt-4">
        <h3 className="mb-3 text-xl font-semibold text-darkBrown">{title}</h3>
        <p className="text-darkBrown/70">{description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const features = [
    {
      title: "Custom Designs",
      description: "Personalized cakes for your special day",
      icon: "🎨"
    },
    {
      title: "Fresh Ingredients",
      description: "Made with the finest quality ingredients",
      icon: "✨"
    },
    {
      title: "Fast Delivery",
      description: "Reliable delivery to your location",
      icon: "🚚"
    }
  ];

  return (
    <section id="about" className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Decorative elements */}
      {/* <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" /> */}
      
      <div className="container max-w-5xl mx-auto px-4">
        <div className="mx-auto flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* About Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[320px] w-full overflow-hidden rounded-lg shadow-2xl md:h-[480px] md:w-1/2"
          >
            <Image
              src="/about.jpg"
              alt="About AJ's Cakes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/20 to-transparent" />
          </motion.div>

          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full text-center md:w-1/2 md:text-left"
          >
            <h2 className="mb-4 text-4xl font-bold text-darkBrown md:text-5xl">
              AJ's Cakes
            </h2>
            <h3 className="mb-6 text-xl font-semibold text-darkBrown/80 md:text-2xl">
              Where every slice tells a story (and it's a sweet one!)
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-darkBrown/70">
              We're all about fun, flavour, and frosting! From birthdays to "just
              because" days, we bake cakes that taste as good as they look. Custom
              designs, bold flavours, and a whole lot of joy — that's our recipe
              for happiness.
            </p>
          </motion.div>
        </div>

        {/* Features Row */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 md:mt-24 flex max-w-6xl flex-col justify-center gap-6 md:flex-row md:gap-8"
        >
          {features.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
