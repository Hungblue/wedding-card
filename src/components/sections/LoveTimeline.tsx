'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Divider from '@/components/ui/Divider';
import { weddingData } from '@/config/wedding-data';
import { formatDate } from '@/lib/utils';
import { TimelineEvent } from '@/types';

const { timeline } = weddingData;

function TimelineCard({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex w-full items-start gap-6 md:gap-0 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Card content */}
      <div className="flex-1 pl-12 md:pl-0">
        <AnimatedSection
          direction={isEven ? 'left' : 'right'}
          delay={0.1}
          className={`md:px-8 ${isEven ? 'md:text-right' : 'md:text-left'}`}
        >
          {/* Timeline image */}
          {event.image && (
            <div className="relative mb-4 w-full overflow-hidden rounded-xl bg-primary-light/20">
              <Image
                src={event.image}
                alt={event.title}
                width={800}
                height={1000}
                className="h-auto w-full rounded-xl object-contain"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
          )}

          {/* Date badge */}
          <span
            className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-medium tracking-wide"
            style={{
              background: 'var(--theme-primary-light)',
              color: 'var(--theme-primary-dark)',
            }}
          >
            {formatDate(event.date)}
          </span>

          {/* Title */}
          <h3 className="font-serif mb-2 text-xl font-semibold text-txt sm:text-2xl">
            {event.title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm leading-relaxed text-txt-light sm:text-base">
            {event.description}
          </p>
        </AnimatedSection>
      </div>

      {/* Center dot */}
      <div className="absolute left-[20px] top-1 z-10 -translate-x-1/2 md:left-1/2">
        <motion.div
          className="flex h-5 w-5 items-center justify-center rounded-full border-2 bg-bg"
          style={{ borderColor: 'var(--theme-primary)' }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: 'var(--theme-primary)' }}
          />
        </motion.div>
      </div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden flex-1 md:block" />
    </div>
  );
}

export default function LoveTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="timeline" ref={sectionRef} className="relative bg-bg-alt py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section title */}
        <AnimatedSection className="mb-16 text-center">
          <p className="font-body mb-3 text-xs font-medium uppercase tracking-[0.3em] text-txt-muted">
            Our Story
          </p>
          <h2 className="font-serif text-3xl font-bold text-txt sm:text-4xl md:text-5xl">
            Chuyện Tình Yêu
          </h2>
          <Divider className="py-6" />
          <p className="font-body mx-auto max-w-md text-sm leading-relaxed text-txt-light sm:text-base">
            Hành trình từ hai người xa lạ đến ngày chúng mình nắm tay nhau đi
            đến cuối cuộc đời.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" />
          <motion.div
            className="timeline-line-progress"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12 sm:gap-16">
            {timeline.map((event, index) => (
              <TimelineCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
