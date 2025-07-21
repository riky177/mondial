'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  const [phone, setPhone] = useState('');
  const { loginWithPhone, isLoading, error } = useAuth();
  const t = useTranslations('auth.login');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginWithPhone(phone);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');

    // Format as Indonesian phone number
    if (cleaned.startsWith('0')) {
      return cleaned.replace(/^0/, '+62');
    } else if (cleaned.startsWith('62')) {
      return '+' + cleaned;
    } else if (cleaned.startsWith('8')) {
      return '+62' + cleaned;
    }
    return cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
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
          </p>
        </div>

        <div
          className="mt-8 w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 md:p-8"
          onSubmit={handleSubmit}
        >
          <form className="space-y-6" action="#">
            <div>
              <label className="mb-2 block font-red-hat text-[14px] md:text-[16px]">
                {t('phoneLabel')}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 font-red-hat text-xl placeholder-gray-500 placeholder:text-gray-300 focus:outline-none"
                placeholder={t('phonePlaceholder')}
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            {error && (
              <div className="text-center text-sm text-red-600">{error}</div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading || !phone}
                className="group relative flex w-full justify-center rounded-[28px] border border-transparent bg-black px-4 py-3 text-[14px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-[16px]"
              >
                {isLoading ? t('sendingButton') : t('signInButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
