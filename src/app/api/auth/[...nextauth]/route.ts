import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        phone: { label: 'Phone', type: 'text' },
        otp: { label: 'OTP', type: 'text' },
      },
      async authorize(credentials) {
        // Only allow login with both phone and OTP
        // Phone-only validation should be handled in your frontend/API routes
        if (!credentials?.phone || !credentials?.otp) {
          return null;
        }

        // Validate phone number format
        const isValidPhone = /^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(
          credentials.phone,
        );

        if (!isValidPhone) {
          return null;
        }

        // Validate OTP (in real app, this should verify against your backend)
        const isValidOTP = credentials.otp === '123456'; // Dummy OTP

        if (isValidOTP) {
          // Only create session when both phone and OTP are valid
          return {
            id: Math.random().toString(36).substring(7),
            phone: credentials.phone,
            name: 'User',
            email: `${credentials.phone}@example.com`,
            birthdate: new Date().toISOString(),
            address: '123 Main St',
            district: 'Central',
            gender: 'male',
            point: 100,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async signIn({ user, credentials }) {
      // Only allow sign in if both phone and OTP are provided and valid
      return !!(credentials?.phone && credentials?.otp && user);
    },
    async jwt({ token, user }) {
      if (user) {
        token.phone = user.phone;
        token.address = user.address;
        token.district = user.district;
        token.email = user.email;
        token.name = user.name;
        token.birthdate = user.birthdate;
        token.point = user.point;
        token.gender = user.gender;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.phone = token.phone;
        session.user.address = token.address;
        session.user.district = token.district;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.birthdate = token.birthdate;
        session.user.point = token.point;
        session.user.gender = token.gender;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
