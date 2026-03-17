import { NextRequest, NextResponse } from 'next/server';
import { getWishes, addWish } from '@/lib/google-sheets';

export async function GET() {
  try {
    const wishes = await getWishes();
    return NextResponse.json({ wishes }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to fetch wishes:', msg);
    return NextResponse.json({ error: 'Không thể tải lời chúc', detail: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = (body.name || '').trim();
    const message = (body.message || '').trim();

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Vui lòng nhập tên và lời chúc' },
        { status: 400 }
      );
    }

    const wish = await addWish(name, message);
    return NextResponse.json({ wish }, { status: 201 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to add wish:', msg);
    return NextResponse.json({ error: 'Không thể gửi lời chúc', detail: msg }, { status: 500 });
  }
}
