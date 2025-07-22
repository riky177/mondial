'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const loginWithPhone = async (phone: string) => {
    setIsLoading(true);
    setError('');

    try {
      // Call API to send OTP
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to send OTP');
        return false;
      }

      // Store phone in localStorage for OTP page
      localStorage.setItem('tempPhone', phone);

      // Redirect to OTP page
      router.push('/auth/otp');
      return true;
    } catch {
      setError('An error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOTP = async (phone: string, otp: string) => {
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        phone,
        otp,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid OTP');
        return false;
      }

      if (result?.ok) {
        router.push('/');
        return true;
      }

      setError('Authentication failed');
      return false;
    } catch (error) {
      console.error('OTP verification error:', error);
      setError('An error occurred during verification');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loginWithPhone,
    verifyOTP,
    isLoading,
    error,
  };
};
