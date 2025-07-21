'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { useAuth } from '@/hooks/useAuth';

const OTP = () => {
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');
  const [countdown, setCountdown] = useState(60);
  const { verifyOTP, isLoading, error } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('auth.otp');

  useEffect(() => {
    const phoneFromStorage = localStorage.getItem('tempPhone');

    if (phoneFromStorage) {
      setPhone(phoneFromStorage);
    } else {
      router.push('/auth/login');
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && otp) {
      const success = await verifyOTP(phone, otp);
      if (success) {
        localStorage.removeItem('tempPhone');
      }
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
  };

  const handleResendOtp = async () => {
    if (!phone) return;

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      if (response.ok) {
        setCountdown(60);
      }
    } catch (error) {
      console.error('Failed to resend OTP:', error);
    }
  };

  const formatPhoneDisplay = (phoneNumber: string) => {
    if (phoneNumber.startsWith('+62')) {
      return phoneNumber.replace('+62', '(+62) ');
    }
    return phoneNumber;
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-[470px] space-y-8">
        <div className="py-8">
          <h2 className="text-center text-2xl font-extrabold text-gray-900 md:text-[32px]">
            {t('title')}
          </h2>
          <p className="mt-4 text-center font-red-hat text-[14px] text-secondary md:text-[16px]">
            {t('subtitle')}
            <span className="font-medium text-gray-900">
              {formatPhoneDisplay(phone).slice(-3)}
            </span>
          </p>
        </div>

        <div className="mt-8 w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                id="otp"
                name="otp"
                type="text"
                required
                maxLength={6}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-center font-red-hat text-xl tracking-wider placeholder-gray-500 placeholder:text-gray-300 focus:outline-none"
                placeholder={t('otpPlaceholder')}
                value={otp}
                onChange={handleOtpChange}
              />
            </div>

            {error && (
              <div className="text-center text-sm text-red-600">{error}</div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading || otp.length !== 6}
                className="group relative flex w-full justify-center rounded-[28px] border border-transparent bg-black px-4 py-3 text-[14px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-[16px]"
              >
                {isLoading ? t('verifyingButton') : t('continueButton')}
              </button>
            </div>

            <div className="pt-4 text-center">
              {countdown > 0 ? (
                <p className="font-red-hat text-[14px] text-gray-600 md:text-[16px]">
                  {t('resendCountdown', { seconds: countdown })}
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="font-red-hat text-[14px] text-gray-900 hover:text-gray-700 md:text-[16px]"
                >
                  {t('resendButton')}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTP;
