import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { error: 'This route is deprecated. Use /api/chatbot instead.' },
    { status: 410 }
  );
}
