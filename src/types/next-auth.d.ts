import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    phone?: string;
    name?: string;
    email?: string;
    birthdate?: string;
    address?: string;
    district?: string;
    point?: number;
    gender?: string;
  }

  interface Session {
    user: {
      phone?: string;
      name?: string;
      email?: string;
      birthdate?: string;
      address?: string;
      district?: string;
      point?: number;
      gender?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    phone?: string;
    name?: string;
    email?: string;
    birthdate?: string;
    address?: string;
    district?: string;
    point?: number;
    gender?: string;
  }
}
