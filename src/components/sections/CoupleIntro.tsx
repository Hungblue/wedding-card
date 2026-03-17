'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Divider from '@/components/ui/Divider';
import { weddingData } from '@/config/wedding-data';
import { CoupleInfo } from '@/types';

const { couple } = weddingData;

function PersonCard({
  person,
  direction,
}: {
  person: CoupleInfo;
  direction: 'left' | 'right';
}) {
  const isBride = person.role === 'bride';
  const roleLabel = isBride ? 'Cô Dâu' : 'Chú Rể';

  return (
    <AnimatedSection
      direction={direction}
      className="flex flex-col items-center px-4 text-center"
    >
      {/* Circular photo */}
      <div className="relative mb-6">
        {/* Decorative ring */}
        <div
          className="absolute -inset-2 rounded-full"
          style={{
            background: `linear-gradient(
              135deg,
              var(--theme-primary-light),
              var(--theme-secondary-light),
              var(--theme-primary-light)
            )`,
          }}
        />
        <div className="relative h-40 w-40 overflow-hidden rounded-full sm:h-48 sm:w-48">
          <Image
            src={person.image}
            alt={person.fullName}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 160px, 192px"
          />
        </div>
      </div>

      {/* Role label */}
      <p className="font-body mb-2 text-xs font-medium uppercase tracking-[0.25em] text-txt-muted">
        {roleLabel}
      </p>

      {/* Full name */}
      <h3 className="font-serif mb-3 text-2xl font-semibold text-txt sm:text-3xl">
        {person.fullName}
      </h3>

      {/* Decorative line */}
      <div className="mx-auto mb-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-primary-light to-transparent" />

      {/* Bio */}
      <p className="font-body mb-6 max-w-xs text-sm leading-relaxed text-txt-light sm:text-base">
        {person.bio}
      </p>

      {/* Parents */}
      <div className="rounded-lg border border-border bg-surface/60 px-6 py-4 backdrop-blur-sm">
        <p className="font-body mb-1 text-xs uppercase tracking-widest text-txt-muted">
          Con của
        </p>
        <p className="font-serif text-sm text-txt sm:text-base">
          {person.fatherName}
        </p>
        <span className="font-body text-xs text-txt-muted">&</span>
        <p className="font-serif text-sm text-txt sm:text-base">
          {person.motherName}
        </p>
      </div>
    </AnimatedSection>
  );
}

function CenterOrnament() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-primary-light" />
        <svg
          className="text-primary"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <div className="h-16 w-[1px] bg-gradient-to-t from-transparent to-primary-light" />
      </div>
    </div>
  );
}

export default function CoupleIntro() {
  return (
    <section id="couple" className="relative bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section title */}
        <AnimatedSection className="mb-16 text-center">
          <p className="font-body mb-3 text-xs font-medium uppercase tracking-[0.3em] text-txt-muted">
            About Us
          </p>
          <h2 className="font-serif text-3xl font-bold text-txt sm:text-4xl md:text-5xl">
            Cặp Đôi
          </h2>
          <Divider className="py-6" />
          <p className="font-body mx-auto max-w-md text-sm leading-relaxed text-txt-light sm:text-base">
            Hai trái tim, một tình yêu. Chúng mình rất hạnh phúc được chia sẻ
            khoảnh khắc này cùng bạn.
          </p>
        </AnimatedSection>

        {/* Couple cards */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <PersonCard person={couple.groom} direction="left" />
          <CenterOrnament />
          <PersonCard person={couple.bride} direction="right" />
        </div>
      </div>
    </section>
  );
}
