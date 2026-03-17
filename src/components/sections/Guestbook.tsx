'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Divider from '@/components/ui/Divider';
import WishCard from '@/components/ui/WishCard';
import { useGuestbookStore } from '@/hooks/useGuestbook';
import {
  PiPaperPlaneRightBold,
  PiChatCircleTextBold,
  PiCheckCircleBold,
  PiSpinnerBold,
  PiArrowRightBold,
} from 'react-icons/pi';

const MAX_DISPLAY = 6;

function SuccessToast({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 shadow-lg"
        >
          <PiCheckCircleBold className="text-lg text-primary" />
          <span className="font-body text-sm text-txt">
            Gửi lời chúc thành công!
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Guestbook() {
  const wishes = useGuestbookStore((s) => s.wishes);
  const addWish = useGuestbookStore((s) => s.addWish);
  const fetchWishes = useGuestbookStore((s) => s.fetchWishes);
  const isLoading = useGuestbookStore((s) => s.isLoading);
  const hasHydrated = useGuestbookStore((s) => s._hasHydrated);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: boolean; message?: boolean }>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchWishes();
  }, [fetchWishes]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const trimmedName = name.trim();
      const trimmedMessage = message.trim();

      const newErrors: { name?: boolean; message?: boolean } = {};
      if (!trimmedName) newErrors.name = true;
      if (!trimmedMessage) newErrors.message = true;

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setSubmitting(true);
      const success = await addWish(trimmedName, trimmedMessage);
      setSubmitting(false);

      if (success) {
        setName('');
        setMessage('');
        setErrors({});
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2500);
      }
    },
    [name, message, addWish]
  );

  const displayedWishes = wishes.slice(0, MAX_DISPLAY);

  return (
    <section id="guestbook" className="relative bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="mb-16 text-center">
          <p className="font-body mb-3 text-xs font-medium uppercase tracking-[0.3em] text-txt-muted">
            Guestbook
          </p>
          <h2 className="font-serif text-3xl font-bold text-txt sm:text-4xl md:text-5xl">
            Sổ Lưu Bút
          </h2>
          <Divider className="py-6" />
          <p className="font-body mx-auto max-w-md text-sm leading-relaxed text-txt-light sm:text-base">
            Gửi lời chúc đến cặp đôi
          </p>
        </AnimatedSection>

        {/* Form section */}
        <AnimatedSection className="mb-16" delay={0.1}>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-10">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label
                  htmlFor="guestbook-name"
                  className="font-body mb-2 block text-sm font-medium text-txt"
                >
                  Tên của bạn
                </label>
                <input
                  id="guestbook-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
                  }}
                  placeholder="Nhập tên của bạn..."
                  className={`font-body w-full rounded-xl border bg-bg px-4 py-3 text-sm text-txt outline-none transition-all duration-200 placeholder:text-txt-muted/60 focus:ring-2 sm:text-base ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-border focus:border-primary focus:ring-primary/20'
                  }`}
                />
                {errors.name && (
                  <p className="font-body mt-1.5 text-xs text-red-500">
                    Vui lòng nhập tên của bạn
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="guestbook-message"
                  className="font-body mb-2 block text-sm font-medium text-txt"
                >
                  Lời chúc
                </label>
                <textarea
                  id="guestbook-message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message)
                      setErrors((prev) => ({ ...prev, message: false }));
                  }}
                  placeholder="Gửi lời chúc tốt đẹp đến cặp đôi..."
                  rows={4}
                  className={`font-body w-full resize-none rounded-xl border bg-bg px-4 py-3 text-sm text-txt outline-none transition-all duration-200 placeholder:text-txt-muted/60 focus:ring-2 sm:text-base ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-border focus:border-primary focus:ring-primary/20'
                  }`}
                />
                {errors.message && (
                  <p className="font-body mt-1.5 text-xs text-red-500">
                    Vui lòng nhập lời chúc
                  </p>
                )}
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:opacity-90 hover:shadow-md active:scale-[0.97] disabled:opacity-60"
                >
                  {submitting ? (
                    <PiSpinnerBold className="animate-spin text-base" />
                  ) : (
                    <PiPaperPlaneRightBold className="text-base" />
                  )}
                  {submitting ? 'Đang gửi...' : 'Gửi lời chúc'}
                </button>
                <SuccessToast visible={showSuccess} />
              </div>
            </form>
          </div>
        </AnimatedSection>

        {/* Wishes display */}
        {!hasHydrated || (isLoading && wishes.length === 0) ? (
          <div className="flex justify-center py-12">
            <PiSpinnerBold className="animate-spin text-3xl text-primary" />
          </div>
        ) : wishes.length === 0 ? (
          <AnimatedSection className="text-center" delay={0.2}>
            <div className="mx-auto max-w-sm rounded-2xl border border-dashed border-border bg-surface/50 px-8 py-12">
              <PiChatCircleTextBold
                className="mx-auto mb-4 text-5xl"
                style={{ color: 'var(--theme-primary-light)' }}
              />
              <p className="font-body text-sm text-txt-muted sm:text-base">
                Hãy là người đầu tiên gửi lời chúc!
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {displayedWishes.map((wish, index) => (
                <WishCard key={wish.id} wish={wish} index={index} />
              ))}
            </div>

            {wishes.length > MAX_DISPLAY && (
              <AnimatedSection className="mt-10 text-center" delay={0.3}>
                <Link
                  href="/wishes"
                  className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-6 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  Xem tất cả {wishes.length} lời chúc
                  <PiArrowRightBold className="text-base" />
                </Link>
              </AnimatedSection>
            )}
          </>
        )}
      </div>
    </section>
  );
}
