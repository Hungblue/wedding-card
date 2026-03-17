'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Divider from '@/components/ui/Divider';
import { weddingData } from '@/config/wedding-data';
import { formatDate } from '@/lib/utils';
import { WeddingEvent } from '@/types';
import {
  PiChurchBold,
  PiChampagneBold,
  PiClockBold,
  PiMapPinBold,
  PiCalendarBlankBold,
  PiArrowSquareOutBold,
} from 'react-icons/pi';

const { events } = weddingData;

const eventIcons: Record<string, React.ReactNode> = {
  'Lễ Vũ Quy': <PiChurchBold className="text-3xl" />,
  'Tiệc Cưới': <PiChampagneBold className="text-3xl" />,
};

function EventCard({
  event,
  index,
}: {
  event: WeddingEvent;
  index: number;
}) {
  const icon = eventIcons[event.title] ?? (
    <PiCalendarBlankBold className="text-3xl" />
  );

  return (
    <AnimatedSection
      direction={index === 0 ? 'left' : 'right'}
      delay={index * 0.15}
      className="flex-1"
    >
      <div className="group h-full rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
        {/* Icon */}
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-primary transition-transform duration-300 group-hover:scale-110"
          style={{ background: 'var(--theme-primary-light)' }}
        >
          {icon}
        </div>

        {/* Event title */}
        <h3 className="font-serif mb-4 text-center text-2xl font-semibold text-txt sm:text-3xl">
          {event.title}
        </h3>

        {/* Decorative line */}
        <div className="mx-auto mb-6 h-[1px] w-12 bg-gradient-to-r from-transparent via-primary-light to-transparent" />

        {/* Details list */}
        <div className="space-y-4">
          {/* Date */}
          <div className="flex items-center gap-3">
            <PiCalendarBlankBold className="flex-shrink-0 text-lg text-primary" />
            <span className="font-body text-sm text-txt-light sm:text-base">
              {formatDate(event.date)}
            </span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3">
            <PiClockBold className="flex-shrink-0 text-lg text-primary" />
            <span className="font-body text-sm text-txt-light sm:text-base">
              {event.time}
            </span>
          </div>

          {/* Venue */}
          <div className="flex items-start gap-3">
            <PiMapPinBold className="mt-0.5 flex-shrink-0 text-lg text-primary" />
            <div>
              <p className="font-serif font-semibold text-txt">
                {event.venue}
              </p>
              <p className="font-body mt-1 text-sm leading-relaxed text-txt-muted">
                {event.address}
              </p>
            </div>
          </div>
        </div>

        {/* Map button */}
        <div className="mt-8 text-center">
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-6 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <PiMapPinBold className="text-base" />
            Xem bản đồ
            <PiArrowSquareOutBold className="text-base" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function WeddingEvents() {
  return (
    <section id="events" className="relative bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section title */}
        <AnimatedSection className="mb-16 text-center">
          <p className="font-body mb-3 text-xs font-medium uppercase tracking-[0.3em] text-txt-muted">
            Save The Date
          </p>
          <h2 className="font-serif text-3xl font-bold text-txt sm:text-4xl md:text-5xl">
            Sự Kiện Cưới
          </h2>
          <Divider className="py-6" />
          <p className="font-body mx-auto max-w-md text-sm leading-relaxed text-txt-light sm:text-base">
            Chúng mình rất hân hạnh được đón tiếp bạn tại các sự kiện sau.
          </p>
        </AnimatedSection>

        {/* Event cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
