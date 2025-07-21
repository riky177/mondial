import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json();

    // Validate phone number format
    const isValidPhone = /^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(phone);

    if (!isValidPhone) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 },
      );
    }

    // In a real application, you would:
    // 1. Call your SMS service provider API to send OTP
    // 2. Store the OTP temporarily (in database, Redis, etc.) with expiration
    // 3. Rate limit OTP requests per phone number

    // For now, we'll just simulate a successful OTP send
    console.log(`Sending OTP to ${phone}: 123456`); // Dummy OTP for development

    return NextResponse.json(
      { message: 'OTP sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Send OTP error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
