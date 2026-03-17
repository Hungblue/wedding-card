'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { weddingData } from '@/config/wedding-data';
import { formatDate } from '@/lib/utils';

const { couple } = weddingData;

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        {weddingData.heroImage ? (
          <Image
            src={weddingData.heroImage}
            alt="Wedding cover"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                160deg,
                var(--theme-primary-light) 0%,
                var(--theme-background) 30%,
                var(--theme-background-alt) 50%,
                var(--theme-background) 70%,
                var(--theme-primary-light) 100%
              )`,
            }}
          />
        )}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subtitle */}
          <motion.p
            variants={fadeUpItem}
            className="font-body mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/80 sm:text-sm sm:tracking-[0.4em]"
          >
            We Are Getting Married
          </motion.p>

          {/* Decorative line above names */}
          <motion.div variants={fadeUpItem} className="mb-8">
            <div className="mx-auto h-[1px] w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent sm:w-32" />
          </motion.div>

          {/* Couple names */}
          <motion.h1
            variants={fadeUpItem}
            className="font-script mb-4 text-5xl leading-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl"
          >
            {couple.groom.name}
          </motion.h1>

          <motion.div
            variants={fadeUpItem}
            className="mb-4 flex items-center gap-4"
          >
            <span className="h-[1px] w-8 bg-white/50 sm:w-12" />
            <span className="font-script text-2xl text-white/90 md:text-3xl">
              &
            </span>
            <span className="h-[1px] w-8 bg-white/50 sm:w-12" />
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="font-script mb-8 text-5xl leading-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl"
          >
            {couple.bride.name}
          </motion.h1>

          {/* Decorative ornament */}
          <motion.div variants={fadeUpItem} className="mb-8">
            <svg
              className="mx-auto h-8 w-32 text-white/60 sm:w-40"
              viewBox="0 0 160 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16h60c0 0 5-12 20-12s20 12 20 12h60"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M0 16h60c0 0 5 12 20 12s20-12 20-12h60"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="80" cy="16" r="3" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Wedding date */}
          <motion.p
            variants={fadeUpItem}
            className="font-serif text-lg font-medium tracking-wide text-white/90 sm:text-xl md:text-2xl"
          >
            {formatDate(couple.weddingDate)}
          </motion.p>

          {/* Hashtag */}
          {couple.hashtag && (
            <motion.p
              variants={fadeUpItem}
              className="font-body mt-4 text-sm tracking-widest text-white/60"
            >
              {couple.hashtag}
            </motion.p>
          )}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a
            href="#couple"
            className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <span className="font-body text-xs uppercase tracking-widest">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="7 13 12 18 17 13" />
                <polyline points="7 6 12 11 17 6" />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
