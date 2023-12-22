
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module "next-auth" {
  interface Session {
    user?: {
      role?: string;
      id?: string;
    } & DefaultUser;
  }

  interface User extends DefaultUser {
    role?: string;
    id?: string;
  }
}

declare module "next-auth/jwt" {

  interface JWT extends DefaultJWT {
    role?: string;
    id?: string;
  }
}
