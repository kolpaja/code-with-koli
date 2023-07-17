import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },
  pages:{
    signIn:'auth/signin' 
  },
  debug: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.id_token;
        // save to strapi
        fetch(
          process.env.NEXT_PUBLIC_CMS_URL + '/api/cwk-users/auth-with-token',
          {
            method: 'post',
            headers: new Headers({
              Authorization: account.id_token,
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          }
        ).then(response => response.json())
        .then( json => console.log('/api/cwk-users/auth-with-token',JSON.stringify(json)))
        .catch( error => console.error(error))

        return token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token?.accessToken;
      // we will not check for expired token 🥺
      // session.error = token.error;
      return session as Session;
    }
  }
};

export default NextAuth(options);

declare module 'next-auth' {
  interface Session {
    error?: 'RefreshAccessTokenError';
    accessToken?: string | unknown;
  }
}

// declare module '@auth/core/jwt' {
//   interface JWT {
//     access_token?: string;
//     expires_at: number;
//     refresh_token: string;
//     error?: 'RefreshAccessTokenError';
//   }
// }
