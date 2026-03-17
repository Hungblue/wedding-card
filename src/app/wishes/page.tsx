import { Metadata } from 'next';
import { getWishes } from '@/lib/google-sheets';
import WishesPageClient from './WishesPageClient';

export const metadata: Metadata = {
  title: 'Lời Chúc - Nam & B Wedding',
  description: 'Tất cả lời chúc từ khách mời gửi đến cặp đôi',
};

export const revalidate = 30;

export default async function WishesPage() {
  let wishes: Awaited<ReturnType<typeof getWishes>>;
  try {
    wishes = await getWishes();
  } catch {
    wishes = [];
  }

  return <WishesPageClient initialWishes={wishes} />;
}
