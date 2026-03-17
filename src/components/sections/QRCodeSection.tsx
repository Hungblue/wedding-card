'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Divider from '@/components/ui/Divider';
import { weddingData } from '@/config/wedding-data';
import { BankAccount } from '@/types';
import {
  PiCopyBold,
  PiCheckBold,
  PiGiftBold,
  PiHeartStraightBold,
  PiBankBold,
} from 'react-icons/pi';

const { bankAccounts } = weddingData;

const labelIcons: Record<string, React.ReactNode> = {
  'Nhà Trai': <PiGiftBold className="text-2xl" />,
  'Nhà Gái': <PiHeartStraightBold className="text-2xl" />,
};

function buildQRValue(account: BankAccount): string {
  return `Bank: ${account.bankName}\nSTK: ${account.accountNumber}\nChu TK: ${account.accountHolder}`;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg px-3 py-1.5 text-xs font-medium text-txt-light transition-all duration-200 hover:border-primary hover:text-primary active:scale-95"
      aria-label={copied ? 'Đã sao chép' : 'Sao chép số tài khoản'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 text-primary"
          >
            <PiCheckBold className="text-sm" />
            Đã sao chép
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            <PiCopyBold className="text-sm" />
            Sao chép
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function BankCard({
  account,
  index,
}: {
  account: BankAccount;
  index: number;
}) {
  const icon = labelIcons[account.label] ?? (
    <PiBankBold className="text-2xl" />
  );
  const qrValue = buildQRValue(account);

  return (
    <AnimatedSection
      direction={index === 0 ? 'left' : 'right'}
      delay={index * 0.15}
      className="flex-1"
    >
      <div className="group h-full rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
        {/* Label with icon */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-transform duration-300 group-hover:scale-110"
            style={{ background: 'var(--theme-primary-light)' }}
          >
            {icon}
          </div>
          <h3 className="font-serif text-xl font-semibold text-txt sm:text-2xl">
            {account.label}
          </h3>
        </div>

        {/* Decorative line */}
        <div className="mx-auto mb-6 h-[1px] w-12 bg-gradient-to-r from-transparent via-primary-light to-transparent" />

        {/* QR Code */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
            <QRCodeSVG
              value={qrValue}
              size={180}
              level="M"
              includeMargin={false}
              bgColor="#ffffff"
              fgColor="#333333"
            />
          </div>
        </div>

        {/* Bank info */}
        <div className="space-y-3 text-center">
          {/* Bank name */}
          <div className="flex items-center justify-center gap-2">
            <PiBankBold className="text-base text-primary" />
            <span className="font-body text-sm font-medium text-txt sm:text-base">
              {account.bankName}
            </span>
          </div>

          {/* Account number with copy */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <span className="font-body text-lg font-semibold tracking-wide text-txt sm:text-xl">
              {account.accountNumber}
            </span>
            <CopyButton text={account.accountNumber} />
          </div>

          {/* Account holder */}
          <p className="font-body text-sm text-txt-light sm:text-base">
            {account.accountHolder}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function QRCodeSection() {
  return (
    <section id="qrcode" className="relative bg-bg-alt py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="mb-16 text-center">
          <p className="font-body mb-3 text-xs font-medium uppercase tracking-[0.3em] text-txt-muted">
            Wedding Gift
          </p>
          <h2 className="font-serif text-3xl font-bold text-txt sm:text-4xl md:text-5xl">
            Mừng Cưới
          </h2>
          <Divider className="py-6" />
          <p className="font-body mx-auto max-w-lg text-sm leading-relaxed text-txt-light sm:text-base">
            Gửi quà mừng đến cặp đôi
          </p>
        </AnimatedSection>

        {/* Intro text */}
        <AnimatedSection className="mb-12 text-center" delay={0.1}>
          <p className="font-body mx-auto max-w-xl text-sm leading-relaxed text-txt-light sm:text-base">
            Nếu bạn muốn gửi quà mừng cho chúng mình, bạn có thể chuyển khoản
            qua các tài khoản ngân hàng dưới đây. Xin cảm ơn tấm lòng của bạn!
          </p>
        </AnimatedSection>

        {/* QR Code cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {bankAccounts.map((account, index) => (
            <BankCard key={account.accountNumber} account={account} index={index} />
          ))}
        </div>

        {/* Decorative note */}
        <AnimatedSection className="mt-16 text-center" delay={0.3}>
          <div className="mx-auto max-w-md">
            <div className="mx-auto mb-4 h-[1px] w-16 bg-gradient-to-r from-transparent via-primary-light to-transparent" />
            <p className="font-script text-lg text-primary sm:text-xl">
              Sự hiện diện của bạn là món quà quý giá nhất
            </p>
            <div className="mx-auto mt-4 h-[1px] w-16 bg-gradient-to-r from-transparent via-primary-light to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
