'use client';

import Link from 'next/link';
import { Wish } from '@/types';
import WishCard from '@/components/ui/WishCard';
import Divider from '@/components/ui/Divider';
import { PiArrowLeftBold, PiChatCircleTextBold } from 'react-icons/pi';

interface Props {
  initialWishes: Wish[];
}

export default function WishesPageClient({ initialWishes }: Props) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/#guestbook"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-txt-light transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <PiArrowLeftBold className="text-base" />
            Về trang chủ
          </Link>
          <span className="font-script text-xl text-primary sm:text-2xl">
            Nam & Nga
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Page title */}
        <div className="mb-12 text-center">
          <p className="font-body mb-3 text-xs font-medium uppercase tracking-[0.3em] text-txt-muted">
            Guestbook
          </p>
          <h1 className="font-serif text-3xl font-bold text-txt sm:text-4xl md:text-5xl">
            Tất Cả Lời Chúc
          </h1>
          <Divider className="py-6" />
          <p className="font-body text-sm text-txt-light sm:text-base">
            {initialWishes.length > 0
              ? `${initialWishes.length} lời chúc từ khách mời`
              : 'Chưa có lời chúc nào'}
          </p>
        </div>

        {/* Wishes grid */}
        {initialWishes.length === 0 ? (
          <div className="mx-auto max-w-sm rounded-2xl border border-dashed border-border bg-surface/50 px-8 py-12 text-center">
            <PiChatCircleTextBold
              className="mx-auto mb-4 text-5xl"
              style={{ color: 'var(--theme-primary-light)' }}
            />
            <p className="font-body text-sm text-txt-muted sm:text-base">
              Chưa có lời chúc nào. Hãy là người đầu tiên!
            </p>
            <Link
              href="/#guestbook"
              className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90"
            >
              Gửi lời chúc
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {initialWishes.map((wish, index) => (
              <WishCard key={wish.id} wish={wish} index={index} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
